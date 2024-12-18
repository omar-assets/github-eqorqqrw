import { BackgroundPattern } from '../components/ui/BackgroundPattern';
import { ContactInfo } from '../components/contact/ContactInfo';

function ContactPage() {
  return (
    <>
      <BackgroundPattern variant="primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in
              <span className="text-primary"> Touch</span>
            </h1>
            <p className="text-xl text-gray-600">
              Have questions? Our team is here to help you with any inquiries about our investment opportunities and platform capabilities.
            </p>
          </div>
        </div>
      </BackgroundPattern>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;