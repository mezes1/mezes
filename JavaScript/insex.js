let buttonMySkills = document.querySelector('nav button'),
    menuMySkills = document.querySelector('.mySkills'),
    body = document.querySelector('body'),
    mySkillsClose = document.querySelector('.mySkills i')


    console.log(mySkillsClose);



    buttonMySkills.addEventListener('click', function(){
        menuMySkills.style.display = 'block'
    })

    mySkillsClose.addEventListener('click', function(){
        menuMySkills.style.display = 'none'
    })

