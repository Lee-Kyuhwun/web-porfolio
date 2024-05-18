document.addEventListener('DOMContentLoaded', function() {
    var projectLinks = document.querySelectorAll('.project-link');
    var modal = document.getElementById('projectModal');
    var modalTitle = document.getElementById('modalTitle');
    var modalContent = document.getElementById('modalContent');
    var modalClose = document.querySelector('.modal-close');

    projectLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('Project link clicked'); // 디버깅 로그
            var title = link.getAttribute('data-title');
            var content = link.getAttribute('data-content');

            modalTitle.innerText = title;
            // marked 함수가 존재하는지 확인합니다.
            if (typeof marked === 'function') {
                modalContent.innerHTML = marked(content);
            } else {
                console.error('marked is not a function');
                modalContent.innerHTML = content;
            }

            modal.style.display = 'block';
        });
    });

    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
