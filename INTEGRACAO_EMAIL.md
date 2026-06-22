# 📧 Integração de Email - Formulário de Contato

## 🎯 Opções de Integração

Há várias formas de integrar o formulário com envio de email real:

---

## 1️⃣ EmailJS (Recomendado - Fácil)

### Passo 1: Criar Conta
1. Acesse https://www.emailjs.com/
2. Crie uma conta gratuita
3. Verifique seu email

### Passo 2: Configurar Serviço de Email
1. Vá em "Email Services"
2. Escolha seu provedor (Gmail, Outlook, etc)
3. Siga as instruções
4. Copie o Service ID

### Passo 3: Criar Template
1. Vá em "Email Templates"
2. Crie um novo template com:
   - Nome do seu contato
   - Email do contato
   - Assunto
   - Mensagem

### Passo 4: Instalar EmailJS
```bash
npm install @emailjs/browser
```

### Passo 5: Atualizar Contact.tsx

```tsx
import emailjs from '@emailjs/browser';

// No início do componente
useEffect(() => {
  emailjs.init('YOUR_PUBLIC_KEY'); // Pegue em Account > API Keys
}, []);

// Atualizar handleSubmit
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID', // Pegue em Email Services
      'YOUR_TEMPLATE_ID', // Pegue em Email Templates
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'fwdefendi20@gmail.com', // Seu email
      }
    );

    setSubmitMessage('Mensagem enviada com sucesso! 🎉');
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    setSubmitMessage('Erro ao enviar mensagem. Tente novamente.');
    console.error('EmailJS Error:', error);
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 3000);
  }
};
```

### Benefícios
✅ Fácil de configurar
✅ Gratuito até 200 emails/mês
✅ Sem backend necessário
✅ Suporta múltiplos provedores
✅ Templates customizáveis

---

## 2️⃣ Formspree

### Passo 1: Criar Conta
1. Acesse https://formspree.io/
2. Crie uma conta gratuita

### Passo 2: Criar Form
1. Vá em "New Form"
2. Copie o Endpoint URL

### Passo 3: Instalar Axios
```bash
npm install axios
```

### Passo 4: Atualizar Contact.tsx

```tsx
import axios from 'axios';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await axios.post('https://formspree.io/f/YOUR_FORM_ID', {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });

    setSubmitMessage('Mensagem enviada com sucesso! 🎉');
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    setSubmitMessage('Erro ao enviar mensagem. Tente novamente.');
    console.error('Error:', error);
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 3000);
  }
};
```

### Benefícios
✅ Muito fácil
✅ Gratuito
✅ Sem código backend
✅ SPAM protection
✅ Recebe em qualquer email

---

## 3️⃣ Brevo (ex-Sendinblue)

### Passo 1: Criar Conta
1. Acesse https://www.brevo.com/
2. Crie uma conta gratuita

### Passo 2: Obter API Key
1. Vá em "Settings" > "SMTP & API"
2. Copie sua API Key

### Passo 3: Backend Simples (Node.js)

Criar arquivo `api/send-email.js`:
```javascript
const brevo = require('@getbrevo/brevo');

exports.sendEmail = async (req, res) => {
  const apiInstance = new brevo.TransactionalEmailsApi();
  apiInstance.setApiKey(brevo.ApiKeyAuth, process.env.BREVO_API_KEY);

  const sendSmtpEmail = {
    to: [{ email: 'fwdefendi20@gmail.com' }],
    sender: { email: req.body.email, name: req.body.name },
    subject: req.body.subject,
    htmlContent: req.body.message,
  };

  try {
    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    res.json({ success: true, messageId: result.messageId });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
```

---

## 4️⃣ Backend Personalizado (Node.js + Express)

### Passo 1: Configurar Backend

```javascript
// server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Use App Password
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: 'fwdefendi20@gmail.com',
      subject: `[Portfólio] ${subject}`,
      html: `
        <h2>Novo Contato do Portfólio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Email server running on port 3001');
});
```

### Passo 2: Atualizar Contact.tsx

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitMessage('Mensagem enviada com sucesso! 🎉');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  } catch (error) {
    setSubmitMessage('Erro ao enviar mensagem.');
    console.error('Error:', error);
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 3000);
  }
};
```

---

## 🔑 Variáveis de Ambiente

Crie arquivo `.env` (não commitar no Git):

```env
# EmailJS
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Email Backend
EMAIL_USER=seu@gmail.com
EMAIL_PASSWORD=sua_app_password
```

---

## 🔐 Segurança - App Password Gmail

1. Ative autenticação de 2 fatores
2. Vá em https://myaccount.google.com/apppasswords
3. Selecione "Mail" e "Windows"
4. Copie a senha gerada
5. Use em `EMAIL_PASSWORD`

**Nunca use sua senha real do Gmail!**

---

## 📊 Comparação

| Solução | Dificuldade | Custo | Setup | Recomendado |
|---------|------------|------|-------|-------------|
| EmailJS | Fácil | Grátis | 10 min | ✅ Sim |
| Formspree | Muito Fácil | Grátis | 5 min | ✅ Sim |
| Brevo | Médio | Grátis | 15 min | Talvez |
| Backend | Difícil | Hosting | 1 hora | Se tiver server |

---

## ✅ Checklist de Integração

- [ ] Escolher solução (EmailJS recomendado)
- [ ] Criar conta
- [ ] Obter credenciais
- [ ] Instalar dependência
- [ ] Atualizar Contact.tsx
- [ ] Configurar .env
- [ ] Testar formulário
- [ ] Confirmar email recebido

---

## 🆘 Troubleshooting

### EmailJS não funciona
- Verificar Public Key em Account > API Keys
- Confirmar Service ID está correto
- Testar conexão na conta EmailJS

### Email não chega
- Verificar pasta spam
- Confirmar email de envio
- Checar logs do service

### CORS error
- Adicionar domínio em EmailJS CORS
- Ou usar proxy CORS online

---

## 🚀 Deploy com Backend

Se usar backend Node.js:

### Opção 1: Heroku (Descontinuado)
Usar alternativa como Railway ou Render

### Opção 2: Railway
```bash
npm i -g railway
railway login
railway link
railway up
```

### Opção 3: Render
1. Conectar GitHub
2. Deploy automático
3. Variáveis de ambiente no dashboard

---

## 📚 Recursos

- **EmailJS Docs**: https://www.emailjs.com/docs/
- **Formspree Docs**: https://formspree.io/docs/
- **Brevo Docs**: https://developers.brevo.com/
- **Nodemailer**: https://nodemailer.com/

---

**Recomendação Final**: Use **EmailJS** para início rápido, sem backend! 🚀
