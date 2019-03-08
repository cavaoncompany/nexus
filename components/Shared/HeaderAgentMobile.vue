<template>
    <b-dropdown class="dropdown .mobile-agent-dropdown" right no-caret>
        <template slot="button-content"><i class="fas fa-user-circle"></i></template>
            <div class="navigation d-flex h-100">
            <button class="btn btn-link w-50 tab-link" v-on:click.stop="toggle('traveller')" v-bind:class="{'active': !agent}" >Traveller</button>
            <button class="btn btn-link w-50 tab-link" v-on:click.stop="toggle('agent')" v-bind:class="{'active': agent}" >Agent</button>
            </div>
            <div class="tab-content">
                <div class="tab-agent p-3" id="mobileAgent" v-show="agent===true">
                    <h2 class="mt-3">AGENT LOG IN</h2>
                    <p>Welcome back, Nexus Travel agents</p>
                    <form>
                        <div class="form-group">
                            <label class="agent-form-label mb-2" for="mobileAgentUsername">Username*</label>
                            <input type="text" class="form-control" id="mobileAgentUsername" aria-describedby="agentUsername" placeholder="you@example.com" v-model="agentUsername">
                        </div>
                        <div class="form-group">
                            <label class="agent-form-label mb-2" for="mobileAgentPassword">Password*</label>
                            <input type="password" class="form-control" id="mobileAgentPassword" placeholder="Password" v-model="agentPassword">
                        </div>
                        <button type="submit" class="btn btn-primary">Log in</button>
                        <div class="form-group form-check">
                            <div class="checkbox-round">
                                <input type="checkbox" class="form-check-input" id="rememberUser">
                                <label for="rememberUser"></label>
                            </div>
                            <label class="form-check-label" for="rememberUser">Remember me</label>
                            <a href="#" class="forgotPassword">Forgot Password?</a>
                        </div>
                    </form>
                    <h3 class="mb-2">New Travel Agent?</h3>
                    <p>If you are interested in becoming our travel agent, please call <a href="tel:+4420-7637-7760">020-7637-7760</a> or email <a href="mailto: london@nexusholidays.com">london@nexusholidays.com</a>.</p>
                </div>
                <div class="tab-pane active" id="traveller" v-show="agent===false">
                    <div class="links p-3" v-if="mobileView===0">
                        <ul>
                            <li class="traveller-menu" v-on:click.stop="setMobileView(1)">
                                <a v-on:click.stop="setMobileView(1)">Log in</a>
                            </li>
                            <li class="traveller-menu" v-on:click.stop="setMobileView(2)">
                                <a v-on:click.stop="setMobileView(2)">Sign up</a>
                            </li>
                            <li class="traveller-menu" v-on:click.stop="setMobileView(0)">
                                <a v-on:click.stop="setMobileView(3)">Manage Booking</a>
                            </li>
                        </ul>
                    </div>
                    <div class="login p-3" v-if="mobileView===1">
                        <a class="backToPreviousView" v-on:click.stop="setMobileView(0)"><i class="fas fa-arrow-left"></i> Back</a>
                        <h2 class="mt-3">LOG IN</h2>
                        <form>
                            <div class="form-group">
                                <label class="traveller-form-label mb-2" for="travellerUsername">Username*</label>
                                <input type="text" v-model="travellerUsername" class="form-control" id="travellerUsername" aria-describedby="travellerUsername" placeholder="you@example.com">
                            </div>
                            <div class="form-group">
                                <label class="traveller-form-label mb-2" for="travellerPassword">Password*</label>
                                <input type="password" v-model="travellerPassword" class="form-control" id="travellerPassword" placeholder="Password">
                            </div>
                            <button type="submit" class="btn btn-primary">Log in</button>
                            <div class="form-group form-check">
                            <div class="checkbox-round">
                                <input type="checkbox" class="form-check-input" id="remember">
                                <label for="remember"></label>
                            </div>
                            <label class="form-check-label" for="remember">Remember me</label>
                                <a href="" class="forgotPassword">Forgot Password?</a>
                            </div>
                            <div class="divider">OR</div>
                        </form>
                        <button type="button" class="btn btn-light social-login">
                            <img src="~/assets/images/facebook.png" alt="Facebook logo">Sign in with Facebook</button>
                        <button type="button" class="btn btn-light social-login">
                            <img src="~/assets/images/google.png" alt="Facebook logo">Sign in with Google</button>
                    </div>
                    <div class="signup p-3" v-if="mobileView===2">
                        <a class="backToPreviousView" v-on:click.stop="setMobileView(0)"><i class="fas fa-arrow-left"></i> Back</a>
                        <h2 class="mt-3">SIGN UP</h2>
                        <button type="button" class="btn btn-light social-login">
                            <img src="~/assets/images/facebook.png" alt="Facebook logo">Sign in with Facebook</button>
                        <button type="button" class="btn btn-light social-login">
                            <img src="~/assets/images/google.png" alt="Facebook logo">Sign in with Google</button>
                        <div class="dividerTop">OR</div>
                        <form class="mobile-sign-up-form">
                            <div class="form-group">
                                <label class="traveller-form-label mb-2" for="name">Name*</label>
                                <input type="text" v-model="name" class="form-control" id="name" aria-describedby="name" placeholder="Name">
                            </div>
                            <div class="form-group">
                                <label class="traveller-form-label mb-2" for="username">Email*</label>
                                <input type="email" v-model="email" class="form-control" id="email" aria-describedby="email" placeholder="you@example.com">
                            </div>
                            <div class="form-group">
                                <label class="traveller-form-label mb-2" for="newPassword">Password*</label>
                                <input type="password" v-model="newPassword" class="form-control" id="newPassword" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <label class="traveller-form-label mb-2" for="confirmPassword">Confirm Password*</label>
                                <input type="password" v-model="confirmPassword" class="form-control" id="confirmPassword" placeholder="Password">
                            </div>
                            <button type="submit" class="btn btn-primary">Sign up</button>
                            <p>By clicking this button, I agree to the <a href="#">Terms and Conditions</a> and the <a href="#">Privacy Policy</a>.</p>  
                        </form>
                    </div>
                    <div class="manageBooking p-3" v-if="mobileView===3">
                        <a class="backToPreviousView" v-on:click.stop="setMobileView(0)"><i class="fas fa-arrow-left"></i> Back</a>
                        <h2 class="mt-3">MANAGE BOOKING</h2>
                        
                        <form>
                            <div class="form-group">
                                <label class="traveller-form-label mb-2" for="bookingId">Booking ID*</label>
                                <input type="text" v-model="bookingId" class="form-control" id="bookingId" aria-describedby="booking-id" placeholder="Booking ID">
                            </div>
                            <div class="form-group">
                                <label class="traveller-form-label mb-2" for="lastname">Last name*</label>
                                <input type="text" v-model="lastname" class="form-control" id="lastname" aria-describedby="lastname" placeholder="Last name">
                            </div>
                            <div class="form-group">
                                <label class="traveller-form-label mb-2" for="departureDate">Departure date*</label>
                                <input type="date" v-model="departureDate" class="form-control" id="departureDate" placeholder="dd/mm/yyyy">
                            </div>
                            <p>By clicking this button, I agree to the <a href="#">Privacy Policy</a>.</p>
                            <button type="submit" class="btn btn-primary">Find My Booking</button>
                        </form>
                    </div>
                </div>
            </div>
    </b-dropdown>
</template>

<script>
export default {
    name: 'HeaderAgentMobile',
    data() {
        return {
            agentPassword: '',
            agentUsername: '',
            agent: false,
            mobileView: 0,
            travellerUsername: '',
            travellerPassword: '',
            name: '',
            email: '',
            newPassword: '',
            confirmPassword: '',
            bookingId: '',
            lastname: '',
            departureDate: ''
        }
    },
    props: {
        windowWidth: Number,
        isMobile: Boolean
    },
    methods: {
        toggle: function(content) {
            if (content === 'agent') {
                this.agent = true
            } 
            else if (content === 'traveller') {
                this.agent = false
            }
        },
        setMobileView: function(mobileView) {
            this.mobileView = mobileView
        }
    }
}
</script>

<style>
.mobile-agent-dropdown .dropdown-menu {
    border: 1px solid #EFEFEF;
    border-top: 3px solid #1B75BB;
    margin-top: 0;
    border-radius: 0;
    color: #7F7F7F;
    font-size: 14px;
    cursor: pointer;
    z-index: 1200;
}

#mobileAgent i, #mobile-agent i {
    font-size: 20px;
}

.mobile-agent-dropdown .dropdown-menu h2 {
    color: #103A5B;
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    margin-bottom: 15px;
}

.mobile-agent-dropdown .dropdown-toggle::after {
    display: none !important;
}

.mobile-agent-dropdown .btn-link:active, .mobile-agent-dropdown .btn-link:focus {
    color: #1B75BB;
    text-decoration: none;
    background: #FFF;
}

.navigation .tab-link, .navigation .tab-link {
    height: 50px;
    background: #1B75BB;
    color: #FFF;
}

.navigation .tab-link:active, .navigation .tab-link:focus, .tab-link.focus, .tab-link.active {
    background: #FFF;
    color: #1B75BB;
}

.tab-agent p {
    line-height: 1.5em;
}

.mobile-agent-dropdown .dropdown-menu h3 {
    font-size: 14px;
    color: #103A5B;
    font-weight: 600;
}

.mobile-agent-dropdown .dropdown-menu input {
    border-radius: 50px;
}

.mobile-agent-dropdown .dropdown-menu input::placeholder {
    color: #CBCBCB;
    padding-left: 10px;
}

.mobile-agent-dropdown .dropdown-menu form {
    border-bottom: 1px solid #EFEFEF;
    margin-bottom: 25px;
    margin-top: 30px;
    padding-bottom: 25px;
}

.mobile-agent-dropdown .dropdown-menu .mobile-sign-up-form {
    border-bottom: none;
    border-top: 1px solid #EFEFEF;
    margin-top: 30px;
    padding-top: 30px;
}

.mobile-agent-dropdown .dropdown-menu .agent-form-label {
    font-size: 13px;
}

.mobile-agent-dropdown .dropdown-menu a {
    color: #1B75BB;
}

.form-check-input {
    width: 1.1em;
    height: 1.1em;
    margin-right: .5em;
}

.mobile-agent-dropdown button, .mobile-agent-dropdown .btn {
    height: 100%;
    font-size: 13px;
    border: none;
    border-radius: 0;
    color: #7F7F7F;
}

input[type=checkbox] {
    visibility: hidden;
}

.checkbox-round {
    width: 25px;
}

.checkbox-round label {
    cursor: pointer;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    background: #FFF;
    border:1px solid #ddd;
    border-radius: 50px;
}

.checkbox-round label:after {
    opacity: 0.2;
    content: '';
    position: absolute;
    width: 9px;
    height: 5px;
    background: transparent;
    top: 4px;
    left: 3px;
    border: 3px solid #333;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    opacity: 0;
}

.checkbox-round label:hover::after {
    opacity: 0.5;
}

.checkbox-round input[type=checkbox]:checked + label:after {
    opacity: 1;
}

.forgotPassword {
    float: right;
}

.traveller-dropdown .dropdown-menu {
    width: 381px;
    font-size: 14px;
    color: #1B75BB;
    padding-left: 20px;
    padding-right: 20px;
    z-index: 1200;
}

.links li a {
    font-size: 14px;
    color: #575757;
}

.links ul {
    padding: 0;
}

.links li {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 20px;
    margin-top: 15px;
    list-style-type: none;
}

.links li:hover, .links li a:hover {
    background-color: #EBF3F8;
    border-radius: 50px;
    color: #1B75BB;
    text-decoration: none;
}

.login, .signup, .manageBooking {
    padding-top: 20px;
}

.traveller-dropdown .dropdown-menu h2 {
    color: #103A5B;
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    margin-bottom: 15px;
    padding-top: 25px;
}

.traveller-dropdown .dropdown-menu input {
    border-radius: 50px;
}

.traveller-dropdown .dropdown-menu input::placeholder {
    color: #CBCBCB;
    padding-left: 10px;
}

.traveller-dropdown .dropdown-menu .signup form {
    border-bottom: none;
    border-top: 1px solid #EFEFEF;
    padding-top: 35px;
    margin-top: 15px;
}

.traveller-dropdown .dropdown-menu .manageBooking form {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
}

.traveller-dropdown .dropdown-menu .traveller-form-label {
    font-size: 13px;
    color: #43494D;
}

.traveller-dropdown .dropdown-menu a {
    color: #1B75BB;
}

input[type=checkbox] {
    visibility: hidden;
}

button[type="submit"] {
    width: 100%;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 600;
    color: #FFF;
    height: 40px;
    background-color: #1B75BB;
    margin-top: 25px;
    margin-bottom: 25px;
}

button:hover {
    text-decoration: none;
}

.forgotPassword {
    float: right;
}

.backToPreviousView {
    margin-top: 20px;
    cursor: pointer;
}

.form-check-label {
    color: #3C3C3C;
}

.social-login {
    width: 100%;
    border-radius: 50px;
    background-color: #FFF;
    border: 1px solid #E0E0E0;
    height: 40px;
    margin-bottom: 20px;
    color: #3C3C3C;
    font-size: 14px;
}

.social-login img {
    float: left;
    height: 25px;
}

.divider {
    position: absolute;
    bottom: 155px;
    left: 44%;
    background: #FFF;
    width: 40px;
    text-align: center;
    color: #CBCBCB;
}

.dividerTop {
    position: absolute;
    bottom: 520px;
    left: 44%;
    background: #FFF;
    width: 40px;
    text-align: center;
    color: #CBCBCB;
}

.signup p, .manageBooking p {
    color: #7F7F7F;
    font-size: 12px;
    text-align: center;
    line-height: 1.5em;
}

.manageBooking p {
    margin-bottom: 0;
    margin-top: 45px;
}
</style>