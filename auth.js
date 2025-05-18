function updateAuthUI() {  const loginButton = document.getElementById('loginButton');
  const userDropdown = document.getElementById('userDropdown');
  const userAvatar = document.getElementById('userAvatar');
  const username = localStorage.getItem('username');

  if (username) {
    loginButton.classList.add('hidden');
    userDropdown.classList.remove('hidden');
    userAvatar.src = `https://avatar.vercel.sh/${encodeURIComponent(username)}`;
    document.getElementById('usernameDisplay').textContent = username;
  } else {
    loginButton.classList.remove('hidden');
    userDropdown.classList.add('hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const dropdownTrigger = document.getElementById('dropdownTrigger');
  const dropdownContent = document.getElementById('dropdownContent');

  dropdownTrigger?.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!dropdownContent.contains(e.target)) {
      dropdownContent.classList.add('hidden');
    }
  });
  document.getElementById('logoutButton')?.addEventListener('click', () => {
    localStorage.removeItem('username');
    window.location.href = '/';
  });

  updateAuthUI();
});
