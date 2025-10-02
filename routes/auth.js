//routes/auth.js
const express = require('express');
const router = express.Router();
const {
  loginUser,
  requestResetCode,
  resetPassword,
  requestEmailVerification,
  verifyEmailCode,
  checkEmail,
  checkUsername,
  registerUser,
  verifyResetCode
} = require('../controllers/authController');

// 로그인
router.post('/login', loginUser);

// 비밀번호 재설정
router.post('/request-reset', requestResetCode);
router.post('/reset-password', resetPassword);
router.post('/verify-reset-code', verifyResetCode);

// 이메일 인증
router.post('/request-email-verification', requestEmailVerification);
router.post('/verify-email-code', verifyEmailCode);

// 이메일 중복 확인
router.post('/check-email', checkEmail);

// 닉네임 중복 확인
router.post('/check-username', checkUsername);

// 회원가입
router.post('/register', registerUser);

module.exports = router;