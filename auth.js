function updateAuthUI() {
  const loginButton = document.getElementById('loginButton');
  const userDropdown = document.getElementById('userDropdown');
  const userAvatar = document.getElementById('userAvatar');
  const sidebarProfile = document.getElementById('sidebarProfile');
  const sidebarAvatar = document.getElementById('sidebarAvatar');
  const sidebarUsername = document.getElementById('sidebarUsername');
  const username = localStorage.getItem('username');

  if (username) {
    loginButton.classList.add('hidden');
    userDropdown.classList.remove('hidden');
    userAvatar.src = `https://api.dicebear.com/7.x/lorelei-neutral/svg?seed=${encodeURIComponent(username)}`;
    document.getElementById('usernameDisplay').textContent = username;
    
    if (sidebarAvatar && sidebarUsername) {
      sidebarAvatar.src = `https://api.dicebear.com/7.x/lorelei-neutral/svg?seed=${encodeURIComponent(username)}`;
      sidebarUsername.textContent = username;
    }
  } else {
    loginButton.classList.remove('hidden');
    userDropdown.classList.add('hidden');
    
    if (sidebarProfile) {
      sidebarProfile.classList.add('hidden');
    }
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
    window.location.href = 'https://ahmoin.github.io/grub-games';
  });

  updateAuthUI();
});
