const btnLogIn = document.querySelector('.js-log-in');
const btnLogOut = document.querySelector('.js-log-out');
const elementUser = document.querySelector('.element-user-js');
const elementModal = document.querySelector('.modal');
const modalBody = document.querySelector('.modal__body');
const modalOverlay = document.querySelector('.modal__overlay');

const PLAYER_STORAGE_KEY = 'FOODEHOLIC';

isLogin = false;
// LƯU LOCAL, VÀO APPLICATION, LOCAL STORAGE COI;
config = JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {};
setConfig = function(key, value) {
    config[key] = value;
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(config));
}
// Load khi mới vào
if(config.isLogin) {
        elementUser.style.display = 'block';
        btnLogIn.style.display = 'none';
        elementModal.style.display = 'none';
} else {
        elementUser.style.display = 'none';
        btnLogIn.style.display = 'block';
}



btnLogOut.addEventListener('click', function(){
    isLogin = false;
    setConfig('isLogin', isLogin);
    elementUser.style.display = 'none';
    btnLogIn.style.display = 'block';
})



btnLogIn.addEventListener('click', function(){
    elementModal.style.display = 'flex';
    modalBody.innerHTML = `<div class="auth-form">
                                <div class="auth-form__container">
                                    <div class="auth-form__header">
                                        <div class="auth-form__heading">Đăng nhập</div>
                                        <span onclick="SignUpSwitch()" class="auth-form__switch-btn">Đăng ký</span>
                                    </div>
                                </div>
                                <div class="auth-form__body">
                                    <form action="" method="post" id="login-form">
                                        <div class="form-group">
                                            <label for="email" class="form-label">Email</label>
                                            <input class="form-control" onblur="BlurEmail()" name="email" rules="required|email" id="email" placeholder="VD: abc@gmail.com" type="text">
                                            <span class="form-message"></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="password" class="form-label">Mật khẩu</label>
                                            <input class="form-control" onblur="BlurPass()" name="password" rules="required|min:6" id="password" placeholder="Nhập mật khẩu" type="password">
                                            <span class="form-message"></span>
                                        </div>
                                        <div class="auth-form__support">
                                            <span class="auth-form__support-forget">Quên mật khẩu</span>
                                            <span class="auth-form__help-separate"></span>
                                            <span class="auth-form__support-need-support">Cận trợ giúp?</span>
                                        </div>
                                        <div class="auth-form__btn">
                                            <div onclick="backForm()" class="auth-form__btn-back">Trở lại</div>
                                            <div onclick="signinTologIn()" class="auth-form__btn-log-in">Đăng nhập</div>
                                        </div>
                                    </form>
                                </div>

                                <div class="auth-form__socials">
                                    <a href="#" class="auth-form__socials--facebook">
                                        <i class="fab fa-facebook-square auth-form__socials-icon"></i>
                                        <span class="auth-form__socials-title">Đăng nhập với facebook</span>
                                    </a>
                                    <a href="#" class="auth-form__socials--google">
                                        <i class="fab fa-google auth-form__socials-icon"></i>
                                        <span class="auth-form__socials-title">Đăng nhập với facebook</span>
                                    </a>
                                </div>
                            </div>`
})

modalOverlay.addEventListener('click', function(){
    elementModal.style.display = 'none';
})

backForm.onclick = function(){
    elementModal.style.display = 'none';
}

function backForm(){
    elementModal.style.display = 'none';
    }

function signinTologIn(){
    if (BlurPass() && BlurEmail()) {
        isLogin = true;
        setConfig('isLogin', isLogin);
        elementUser.style.display = 'block';
        btnLogIn.style.display = 'none';
        elementModal.style.display = 'none';
    } else {
        BlurPass();
        BlurEmail();
    }
    
}

function SignUpSwitch(){
    modalBody.innerHTML = `<div class="auth-form">
                                <div class="auth-form__container">
                                    <div class="auth-form__header">
                                        <div class="auth-form__heading">Đăng ký</div>
                                        <span onclick="SignInSwitch()" class="auth-form__switch-btn">Đăng nhập</span>
                                    </div>
                                </div>
                                <div class="auth-form__body">
                                    <form action="">
                                        <div class="form-group">
                                            <label for="email" class="form-label">Email</label>
                                            <input class="form-control" onblur="BlurEmail()" name="email" rules="required|email" id="email" placeholder="VD: abc@gmail.com" type="text">
                                            <span class="form-message"></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="password" class="form-label">Mật khẩu</label>
                                            <input class="form-control" onblur="BlurPass()" name="password" rules="required|min:6" id="password" placeholder="Nhập mật khẩu" type="password">
                                            <span class="form-message"></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="confirm-password" class="form-label">Nhập lại mật khẩu</label>
                                            <input class="form-control" onblur="BlurCompairPass()" name="confirm-password" rules="required|isCompare" id="confirm-password" placeholder="Nhập mật khẩu" type="password">
                                            <span class="form-message"></span>
                                        </div>
                                        <div class="auth-form__aside">
                                            <p class="auth-form__policy-text-link">
                                                Bằng việc đăng ký, bạn đã đồng ý với Shopee về
                                                <a href="" class="auth-form__policy-link">Điều khoản dịch vụ</a> & 
                                                <a href="" class="auth-form__policy-link">Chính sách bảo mật</a>
                                            </p>
                                        </div>
                                        <div class="auth-form__btn">
                                            <div onclick="backForm()" class="auth-form__btn-back">Trở lại</div>
                                            <div onclick="signinTologIn()" class="auth-form__btn-log-in">Đăng ký</div>
                                        </div>
                                    </form>
                                </div>

                                <div class="auth-form__socials">
                                    <a href="#" class="auth-form__socials--facebook">
                                        <i class="fab fa-facebook-square auth-form__socials-icon"></i>
                                        <span class="auth-form__socials-title">Đăng nhập với facebook</span>
                                    </a>
                                    <a href="#" class="auth-form__socials--google">
                                        <i class="fab fa-google auth-form__socials-icon"></i>
                                        <span class="auth-form__socials-title">Đăng nhập với facebook</span>
                                    </a>
                                </div>
                            </div>`
}

function SignInSwitch(){
    modalBody.innerHTML = `<div class="auth-form">
                                <div class="auth-form__container">
                                    <div class="auth-form__header">
                                        <div class="auth-form__heading">Đăng nhập</div>
                                        <span onclick="SignUpSwitch()" class="auth-form__switch-btn">Đăng ký</span>
                                    </div>
                                </div>
                                <div class="auth-form__body">
                                    <form action="" method="post" id="login-form">
                                        <div class="form-group">
                                            <label for="email" class="form-label">Email</label>
                                            <input class="form-control" onblur="BlurEmail()" name="email" rules="required|email" id="email" placeholder="VD: abc@gmail.com" type="text">
                                            <span class="form-message"></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="password" class="form-label">Mật khẩu</label>
                                            <input class="form-control" onblur="BlurPass()" name="password" rules="required|min:6" id="password" placeholder="Nhập mật khẩu" type="password">
                                            <span class="form-message"></span>
                                        </div>
                                        <div class="auth-form__support">
                                            <span class="auth-form__support-forget">Quên mật khẩu</span>
                                            <span class="auth-form__help-separate"></span>
                                            <span class="auth-form__support-need-support">Cận trợ giúp?</span>
                                        </div>
                                        <div class="auth-form__btn">
                                            <div onclick="backForm()" class="auth-form__btn-back">Trở lại</div>
                                            <div onclick="signinTologIn()" class="auth-form__btn-log-in">Đăng nhập</div>
                                        </div>
                                    </form>
                                </div>

                                <div class="auth-form__socials">
                                    <a href="#" class="auth-form__socials--facebook">
                                        <i class="fab fa-facebook-square auth-form__socials-icon"></i>
                                        <span class="auth-form__socials-title">Đăng nhập với facebook</span>
                                    </a>
                                    <a href="#" class="auth-form__socials--google">
                                        <i class="fab fa-google auth-form__socials-icon"></i>
                                        <span class="auth-form__socials-title">Đăng nhập với facebook</span>
                                    </a>
                                </div>
                            </div>`
}


document.onkeydown = function(e) {
    switch(e.which) {
        case 27:
            elementModal.style.display = 'none';
            break;
        default:

    }
}

function BlurEmail(e){
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const mail = document.getElementById('email');
    if(mail.value === '') {
        mail.parentElement.querySelector('.form-message').innerText = 'Vui lòng nhập trường này';
        mail.parentElement.classList.add('invalid');
        return false;
    } else if (regex.test(mail.value) ===false){
        mail.parentElement.querySelector('.form-message').innerText = 'Email không đúng định dạng';
        mail.parentElement.classList.add('invalid');
        return false;
    }else {
        mail.parentElement.classList.remove('invalid');
        mail.parentElement.querySelector('.form-message').innerText = '';
        return true;
    }
    
}

function BlurPass(e){
    const pass = document.getElementById('password');
    if(pass.value === '') {
        pass.parentElement.querySelector('.form-message').innerText = 'Vui lòng nhập trường này';
        pass.parentElement.classList.add('invalid');
        return false;
    } else if (pass.value.length < 6) {
        pass.parentElement.querySelector('.form-message').innerText = 'Nhập ít nhất 6 ký tự';
        pass.parentElement.classList.add('invalid');
        return false;
    } else {
        pass.parentElement.classList.remove('invalid');
        pass.parentElement.querySelector('.form-message').innerText = '';
        return true;
    } 
}

function BlurCompairPass(e) {
    const rePass = document.getElementById('confirm-password');
    const pass = document.getElementById('password').value;

    if (rePass.value === '') {
        rePass.parentElement.querySelector('.form-message').innerText = 'Vui lòng nhập trường này';
        rePass.parentElement.classList.add('invalid');
        return false;
    } else if (rePass.value === pass) {
        rePass.parentElement.classList.remove('invalid');
        rePass.parentElement.querySelector('.form-message').innerText = '';
        return true;
    } else {
        rePass.parentElement.querySelector('.form-message').innerText = 'Nhập lại mất khẩu không đúng';
        rePass.parentElement.classList.add('invalid');
        return false;
    }
}

var header = document.querySelector('.header');
window.onscroll = function(){
    console.log(document.body.scrollHeight);
    if (document.body.scrollTop > 100) {
        header.classList.add('header__color');
    } else {
        header.classList.remove('header__color');
    }
    
}
