import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Сообщение отправлено! (это демо)');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: '📧', label: 'Email', value: 'mukhammadzinnurhtml@gmail.com', color: 'from-red-500 to-orange-500' },
    { icon: '📱', label: 'Telegram', value: '@Mukhammadzinnur', color: 'from-blue-500 to-cyan-500' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/...', color: 'from-blue-600 to-blue-800' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/...', color: 'from-gray-700 to-gray-900' },
  ];

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
ц        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-lg">
              СВЯЖИТЕСЬ СО МНОЙ
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Контакты
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Готов воплотить вашу идею в жизнь. Свяжитесь со мной любым удобным способом!
          </p>

          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Отправить сообщение</h3>
            
            <div className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ваше имя
                </label>
                <motion.input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:bg-white transition-all duration-300 outline-none"
                  placeholder="Иван Иванов"
                />
                {focusedField === 'name' && (
                  <motion.div
                    layoutId="focus-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </div>

              {/* Email Input */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:bg-white transition-all duration-300 outline-none"
                  placeholder="ivan@example.com"
                />
                {focusedField === 'email' && (
                  <motion.div
                    layoutId="focus-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Сообщение
                </label>
                <motion.textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.02 }}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:bg-white transition-all duration-300 outline-none resize-none"
                  placeholder="Расскажите о вашем проекте..."
                />
                {focusedField === 'message' && (
                  <motion.div
                    layoutId="focus-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Отправить</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Другие способы связи</h3>
              
              <div className="space-y-4">
                {socialLinks.map((link, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {link.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-medium">{link.label}</div>
                      <div className="font-semibold text-gray-800">{link.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Response Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl"
            >
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="text-2xl font-bold mb-2">Быстрый ответ</h4>
              <p className="text-purple-100">
                Обычно отвечаю в течение 24 часов. Готов обсудить ваш проект!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}