# PlatformDevCertCalculator

PlatformDevCertCalculator is a Lightning Web Component (LWC) designed to calculate the certification score for Salesforce Platform Developer certification exams.

## Features

- **Weighted Scoring:** Utilizes weighted scoring for different sections of the exam:
   - Development Fundamentals: 23%
   - Process Automation: 30%
   - User Interface: 25%
   - Testing and Debugging: 22%

- **Passing Score:** Set at 68.
- **Dynamic Calculation:** Dynamically calculates the certification score based on user input.
- **Input Validation:** Validates user input to ensure it falls within the acceptable range (0 to 100).
- **History Tracking:** Maintains a history of certification score attempts.
- **Resource Display:** Displays additional resources if the certification score falls below the passing threshold.

## Usage

1. Enter scores for each section:
   - Development Fundamentals
   - Process Automation
   - User Interface
   - Testing and Debugging

2. Click the "Calculate Score" button to calculate the certification score.
3. View additional resources if the certification score is below the passing threshold.

## How to Use

1. Install the Lightning Web Component in your Salesforce org.
2. Include the component in your Lightning pages or apps.
3. Provide input scores for each section.
4. Click the "Calculate Score" button to obtain the certification score.
5. Review the provided resources if needed.

## Output Sample
![PD1Calc](https://github.com/tomsouza4/Salesforce-PD1-Calculator/assets/11336182/bd67274b-b64d-4284-aa2e-3fc86e50c1f7)
