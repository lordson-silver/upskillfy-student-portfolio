document.addEventListener('DOMContentLoaded', function () {
	const toggleButton = document.getElementById('toggle-light-dark-mode');
	const body = document.body;

	function toggleDarkMode() {
		body.classList.toggle('dark');

		// Update button text based on the current mode
		if (body.classList.contains('dark')) {
			toggleButton.textContent = 'Dark';
		} else {
			toggleButton.textContent = 'Light';
		}
	}

	toggleButton.addEventListener('click', toggleDarkMode);
});
