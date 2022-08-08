window.onload = function () {
    main();
};


function main() {
    const nameInp = document.getElementById('name_inp');
    const mailInp = document.getElementById('mail_inp');
    const subInp = document.getElementById('sub_inp');
    const mInp = document.getElementById('m_inp');
    const submitBtn = document.getElementById('submit_btn');
    const nameOutput = document.getElementById('name_output');
    const resultBody = document.getElementById('mod');
    resultBody.style.display = 'none';

    submitBtn.addEventListener('click', function () {
        const name = nameInp.value;

        if (!name) {
            alert('Please Enter a Valid Name');
            resultBody.style.display = 'none';
        }
        else {
            resultBody.style.display = 'block';
            nameOutput.innerHTML = name;
            nameInp.value = "";
            mailInp.value = "";
            subInp.value = "";
            mInp.value = "";
        }


    })
}

