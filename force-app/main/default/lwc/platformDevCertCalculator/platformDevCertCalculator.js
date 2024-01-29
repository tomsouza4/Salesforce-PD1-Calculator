import { LightningElement, track } from 'lwc';

    const devFundweight = 0.23;
    const processAutoWeight = 0.30;
    const userIntWeight = 0.25;
    const testDebugWeight = 0.22;
    const passingScore = 68;

export default class PlatformDevCertCalculator extends LightningElement {

    @track devFundamentals = 0;
    @track processAutomationScore = 0;
    @track userInterfaceScore = 0;
    @track testingScore = 0;
    @track isButtonDisabled = false; // Initially, the button is active

    devFundamentalScore = 0;
    processAutomationScore = 0;
    userInterfaceScore = 0;
    testingScore = 0;
    
    certificationScore = 0;
    numberOfQuestions = 60;
    
    showResources = false;

    currentHistoryId = 0;

    attemptHistory = [];
    
    calculateScore(){
        let devFundweightScore = this.devFundamentalScore * devFundweight;
        let processAutoWeightScore = this.processAutomationScore * processAutoWeight;
        let userIntWeightScore = this.userInterfaceScore * userIntWeight;
        let testDebugWeightScore = this.testingScore * testDebugWeight;
        this.certificationScore = devFundweightScore + processAutoWeightScore + userIntWeightScore + testDebugWeightScore;
    
        this.showResourceIfFailed();
        this.addAttemptHistory(this.certificationScore);
    }

    handleChange (event){
        
        const inputName = event.target.name;
        let value = Number(event.target.value);

        this.validateInputValue(event);

        if (inputName === 'devFundamentals'){
            this.devFundamentalScore = value;
        } else if (inputName === 'processAuto' ){
            this. processAutomationScore = value;
        } else if (inputName === 'userInterface'){
            this.userInterfaceScore = value;
        } else if (inputName === 'testDebugDeploy'){
            this.testingScore = value;
        }  
    }

    validateInputValue (event) {
        const fieldName = event.target.label;
        const value = parseFloat(event.target.value);
        let disableBtn = true;

        if (isNaN(value) || value <= -1 || value > 100) {
            console.log('***entered if <0 || >100');
            this.disableButton(disableBtn);
            console.log('***this.isButtonDisabled 1: ' + this.isButtonDisabled)
            event.target.setCustomValidity('Value must be between 0 and 100.');
        } else {
            this.disableButton(!disableBtn);
            event.target.setCustomValidity(''); // Clear the custom validity message
        }

        event.target.reportValidity();
        this[fieldName.toLowerCase().replace(' ', '')] = value;
    }

    disableButton(enableButton) {
        this.isButtonDisabled = enableButton;
    }

    showResourceIfFailed(){
        if (this.certificationScore < passingScore){
            this.showResources = true;
        } else {
            this.showResources = false;
        }
    }

    addAttemptHistory(Score){
        this.currentHistoryId ++;
        const attempt =
            {
                Id: this.currentHistoryId, Score
            }
        this.attemptHistory = [...this.attemptHistory, attempt];
    }

    deleteAttemptHandler(event){
        let attemptId = event.detail;
        this.attemptHistory = this.attemptHistory.filter(attempt => attempt.Id != attemptId); console.log('New attempt history' + this.attemptHistory);
    }

    connectedCallback(){
        this.currentHistoryId = this.attemptHistory.length;
    }
}