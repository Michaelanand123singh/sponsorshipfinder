import React, { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const contactInfo = {
    whatsapp: '+91 8083360878',
    phone: '+91 8083360878',
    email: 'official.sponsorshipfinder@gmail.com',
    address: 'New Delhi, India'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('message', formData.message);

      const response = await fetch('YOUR_GOOGLE_SCRIPT_URL', {
        method: 'POST',
        body: form
      });

      setStatus({
        type: 'success',
        message: 'Message sent successfully!'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
      console.error('Error:', error);
    }
    setLoading(false);
  };

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-gray-600">
                Have questions? Reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center gap-3 p-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Chat on WhatsApp</span>
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="w-5 h-5" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-blue-600">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-600">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="text-gray-700">
                  <p className="font-medium mb-1">Visit Us</p>
                  <p>{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-none"
                  placeholder="Your message..."
                />
              </div>

              {status.message && (
                <div className={`flex items-center gap-2 ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {status.type === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <p>{status.message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;