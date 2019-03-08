<template>
    <b-dropdown class="dropdown agent-dropdown" text="Agent" no-caret>
            <h2>AGENT LOG IN</h2>
            <p>Welcome back, Nexus Travel agents</p>
            <form>
                <div class="form-group">
                    <label class="agent-form-label mb-2" for="agentUsername">Username*</label>
                    <input type="text" class="form-control" id="agentUsername" aria-describedby="agentUsername" placeholder="you@example.com" v-model="agentUsername">
                </div>
                <div class="form-group">
                    <label class="agent-form-label mb-2" for="agentPassword">Password*</label>
                    <input type="password" class="form-control" id="agentPassword" placeholder="Password" v-model="agentPassword">
                </div>
                <button type="submit" class="btn btn-primary">Log in</button>
                <div class="form-group form-check">
                    <div class="checkbox-round">
                        <input type="checkbox" class="form-check-input" id="rememberMe">
                        <label for="rememberMe"></label>
                    </div>
                    <label class="form-check-label" for="rememberMe">Remember me</label>
                    <a href="#" class="forgotPassword">Forgot Password?</a>
                </div>
            </form>
            <h3 class="mb-2">New Travel Agent?</h3>
            <p>If you are interested in becoming our travel agent, please call <a href="tel:+4420-7637-7760">020-7637-7760</a> or email <a href="mailto: london@nexusholidays.com">london@nexusholidays.com</a>.</p>
    </b-dropdown>
</template>

<script>
export default {
    name: 'HeaderAgent',
    data() {
        return {
            agentPassword: '',
            agentUsername: ''
        }
    },
    props: {
        windowWidth: Number,
        isMobile: Boolean
    }
}
</script>

<style>
.agent-dropdown .dropdown-menu {
    border: 1px solid #EFEFEF;
    border-top: 3px solid #1B75BB;
    margin-top: 0;
    border-radius: 0;
    color: #7F7F7F;
    font-size: 14px;
    z-index: 1200;
}

.agent-dropdown {
    height: 73px;
}

#agent i, #mobile-agent i {
    font-size: 20px;
}

#agent {
    height: 78px;
    text-decoration: none;
}

.agent-dropdown .dropdown-menu h2 {
    color: #103A5B;
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    margin-bottom: 15px;
}

.agent-dropdown .dropdown-menu h3 {
    font-size: 14px;
    color: #103A5B;
    font-weight: 600;
}

.agent-dropdown .dropdown-menu input {
    border-radius: 50px;
}

.agent-dropdown .dropdown-toggle::after {
    display: none !important;
}

.agent-dropdown .dropdown-menu input::placeholder {
    color: #CBCBCB;
    padding-left: 10px;
}

.agent-dropdown .dropdown-menu form {
    border-bottom: 1px solid #EFEFEF;
    margin-bottom: 25px;
    margin-top: 30px;
    padding-bottom: 25px;
}

.agent-dropdown .dropdown-menu .agent-form-label {
    font-size: 13px;
}

.agent-dropdown .dropdown-menu a {
    color: #1B75BB;
}

.agent-dropdown .dropdown-menu p {
    line-height: 1.5em;
}

.form-check-input {
    width: 1.1em;
    height: 1.1em;
    margin-right: .5em;
}

.dropdown-menu button, .btn, .btn-secondary {
    height: 73px;
    font-size: 13px;
    border: none;
    border-radius: 0;
    color: #7F7F7F;
}

button[type="submit"] {
    width: 100%;
    border-radius: 50px;
    color: #FFF;
    height: 40px;
    background-color: #1B75BB;
    margin-top: 25px;
    margin-bottom: 25px;
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
</style>