// Update the signUp function
export async function signUp(email: string, password: string, fullName: string): Promise<AuthResponse> {
  try {
    const emailExists = await checkEmailExists(email);
    if (emailExists) {
      logger.warn('Duplicate signup attempt:', { email });
      throw { 
        code: 'auth/email-already-in-use',
        message: 'duplicate-email'
      };
    }
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;
    
    // Create user profile with onboarding status
    await createUserProfile(user.uid, {
      email,
      fullName,
      emailVerified: false,
      createdAt: new Date(),
      lastLoginAt: new Date(),
      profileCompletionStatus: 'onboarding'
    });
    
    await updateProfile(user, { 
      displayName: fullName
    });
    
    await sendEmailVerification(user);
    
    logger.info('User signed up successfully:', { userId: user.uid });
    
    const profile = await getUserProfile(user.uid);
    if (!profile) {
      throw new Error('Failed to create user profile');
    }
    
    return { user, profile };
  } catch (error) {
    const message = error.code ? getErrorMessage(error.code) : error.message;
    logger.error('Sign up error:', { code: error.code, message });
    throw { code: error.code, message } as AuthError;
  }
}