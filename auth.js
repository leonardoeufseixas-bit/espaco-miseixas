// ==============================================================
// auth.js – Lógica de autenticação (Firebase + Modal)
// ==============================================================

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = window.STUDIO ? window.STUDIO.firebaseConfig : {
  apiKey: "AIzaSyBXZiqV9zJvUqUO0kYVAR4I7rw2NLQ6jwE",
  authDomain: "studio-9d8b4.firebaseapp.com",
  projectId: "studio-9d8b4",
  storageBucket: "studio-9d8b4.firebasestorage.app",
  messagingSenderId: "557543089301",
  appId: "1:557543089301:web:83571319ef1a8a140f279c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ===== UTILITÁRIOS =====
const U = {
  toast: (msg, tipo = 'ok') => {
    const el = document.createElement('div');
    el.className = `toast toast-${tipo}`;
    el.innerHTML = `<span>${tipo === 'ok' ? '✅' : tipo === 'err' ? '❌' : '⚠️'}</span> ${msg}`;
    document.getElementById('toasts')?.appendChild(el);
    setTimeout(() => el.remove(), 3500);
  }
};

// ===== MODAL =====
function openModal() {
  const modal = document.getElementById('loginModal');
  if (modal) modal.classList.add('open');
  // Limpa erros
  const loginError = document.getElementById('loginError');
  const cadastroError = document.getElementById('cadastroError');
  if (loginError) loginError.textContent = '';
  if (cadastroError) cadastroError.textContent = '';
  // Garante que o formulário de login esteja visível
  const loginForm = document.getElementById('loginForm');
  const cadastroForm = document.getElementById('cadastroForm');
  const modalTitle = document.getElementById('modalTitle');
  if (loginForm) loginForm.style.display = 'block';
  if (cadastroForm) cadastroForm.style.display = 'none';
  if (modalTitle) modalTitle.textContent = 'Entrar';
}

function closeModal() {
  const modal = document.getElementById('loginModal');
  if (modal) modal.classList.remove('open');
}

// ===== EVENT LISTENERS DO MODAL =====
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('loginModal');
  const closeBtn = document.getElementById('closeModal');
  const switchToCadastro = document.getElementById('switchToCadastro');
  const switchToLogin = document.getElementById('switchToLogin');
  const loginForm = document.getElementById('loginForm');
  const cadastroForm = document.getElementById('cadastroForm');
  const modalTitle = document.getElementById('modalTitle');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeModal();
    });
  }

  if (switchToCadastro) {
    switchToCadastro.addEventListener('click', function(e) {
      e.preventDefault();
      if (loginForm) loginForm.style.display = 'none';
      if (cadastroForm) cadastroForm.style.display = 'block';
      if (modalTitle) modalTitle.textContent = 'Criar conta';
    });
  }

  if (switchToLogin) {
    switchToLogin.addEventListener('click', function(e) {
      e.preventDefault();
      if (loginForm) loginForm.style.display = 'block';
      if (cadastroForm) cadastroForm.style.display = 'none';
      if (modalTitle) modalTitle.textContent = 'Entrar';
    });
  }

  // Botão "Entrar"
  const btnLogin = document.getElementById('btnLogin');
  if (btnLogin) {
    btnLogin.addEventListener('click', async function() {
      const email = document.getElementById('loginEmail').value.trim();
      const senha = document.getElementById('loginSenha').value;
      const errorEl = document.getElementById('loginError');
      errorEl.textContent = '';
      if (!email || !senha) {
        errorEl.textContent = 'Preencha e-mail e senha.';
        return;
      }
      try {
        await signInWithEmailAndPassword(auth, email, senha);
        closeModal();
        // Redireciona para a área do cliente
        window.location.href = 'cliente.html';
      } catch (e) {
        const msgs = {
          'auth/user-not-found': 'Usuário não encontrado.',
          'auth/wrong-password': 'Senha incorreta.',
          'auth/invalid-credential': 'Credenciais inválidas.'
        };
        errorEl.textContent = msgs[e.code] || 'Erro ao fazer login.';
      }
    });
  }

  // Botão "Cadastrar"
  const btnCadastrar = document.getElementById('btnCadastrar');
  if (btnCadastrar) {
    btnCadastrar.addEventListener('click', async function() {
      const nome = document.getElementById('cadNome').value.trim();
      const email = document.getElementById('cadEmail').value.trim();
      const senha = document.getElementById('cadSenha').value;
      const tel = document.getElementById('cadTel').value.trim();
      const errorEl = document.getElementById('cadastroError');
      errorEl.textContent = '';
      if (!nome || !email || !senha || !tel) {
        errorEl.textContent = 'Preencha todos os campos.';
        return;
      }
      if (senha.length < 6) {
        errorEl.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        return;
      }
      try {
        const cred = await createUserWithEmailAndPassword(auth, email, senha);
        await setDoc(doc(db, 'users', cred.user.uid), {
          nome, email, telefone: tel, role: 'cliente', criadoEm: new Date()
        });
        await setDoc(doc(db, 'clientes', cred.user.uid), {
          nome, email, tel, totalGasto: 0, sessoes: 0, ultimaVisita: null, criadoEm: new Date()
        });
        closeModal();
        U.toast('Conta criada! Redirecionando...');
        window.location.href = 'cliente.html';
      } catch (e) {
        errorEl.textContent = e.code === 'auth/email-already-in-use' ? 'E-mail já cadastrado.' : e.message;
      }
    });
  }
});

// ===== ESTADO DE AUTENTICAÇÃO (para saber se o usuário está logado) =====
let currentUser = null;
onAuthStateChanged(auth, (user) => {
  currentUser = user;
  // Atualiza botões "Área do Cliente" se necessário
  document.querySelectorAll('.btn-cliente-large, .btn-outline[href*="admin.html"]').forEach(btn => {
    if (user) {
      btn.textContent = 'Meu Perfil';
      btn.href = 'cliente.html';
    } else {
      btn.textContent = 'Área do Cliente';
      btn.href = '#';
      btn.onclick = function(e) {
        e.preventDefault();
        openModal();
      };
    }
  });
});

// ===== EXPORTA FUNÇÕES GLOBAIS =====
window.openModal = openModal;
window.closeModal = closeModal;
window.currentUser = currentUser;
window.auth = auth;

console.log('✅ auth.js carregado');