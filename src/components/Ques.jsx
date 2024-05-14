import React, { useState } from 'react'
import "../styles/Ques.scss"
import axios from 'axios';
import Result from './Result';


const Ques = () => {


  const [loading, setLoading] = useState(false); // State to manage loading status
  const [result, setResult] = useState(null); // State to store the generated result



  async function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    setLoading(true); 
  
    // Collect data from form fields
    const formData = {
      prompt: "You are the best psychologist I know please help me in predicting my mental health but accurate, these are my details :",
      name: document.getElementById('name').value,
      age: document.getElementById('age').value,
      gender: document.getElementById('gender').value,
      employement: document.getElementById('employement').value,
      ethnicity: document.getElementById('ethnicity').value,
      educationalBackground: document.getElementById('education').value,
      FamilyHistoryOfMentalHealthIssues: document.getElementById('FamilyHistory').value,
      PersonalHistoryOfMentalHealthTreatmentOrCounseling: document.getElementById('PersonalHistory').value,
      TraumaticExperienceOrHistoryOfAbuse: document.getElementById('TraumaticHistory').value,
      ChangeInSleepPatterns: document.getElementById('Sleep').value,
      ChangeInAppetite: document.getElementById('Appetite').value,
      EnergyLevel: document.getElementById('Energy').value,
      selfReportedSymptoms: document.getElementById('selfReportSymptoms').value,
      ChronicMedicalCondition: document.getElementById('ChronicMedical').value,
      CurentMedications: document.getElementById('CurentMedical').value,
      HistoryOfSubstaceAbuse: document.getElementById('SubstaceAbuse').value,
      AvailabilityOfSupportSystemFromFamilyAndFriends: document.getElementById('Support').value,
      RelationshipQuality: document.getElementById('Relationship').value,
      SocialIsolationIndicators: document.getElementById('Isolation').value,
      RecentLifeEventsOrStressors: document.getElementById('RecentLifeEvents').value,
      CopingMechanism: document.getElementById('CopingMechanism').value,
      PersonalityAssessment: document.getElementById('PersonalityAssessment').value,
      ChangesInBehavior: document.getElementById('ChangesBehavior').value,
      PatternsOfAvoidanceOrEngagementInRiskyBehaviors: document.getElementById('RiskyBehaviors').value,
      QuestionnariesAndSelfAssesmentTools: document.getElementById('Questionaries').value,
      SubjectiveWellBeingScales: document.getElementById('Subjective').value,
      CognitiveAssessment: document.getElementById('Cognitive').value,
      ThoughtPatternsAndCognitiveDistortions: document.getElementById('Thought').value,
      ImpactOfMentalHealthOnDailyFunctioningLikeWorkRelationshipSelfCareEtc: document.getElementById('Impact').value,
      LivingConditions: document.getElementById('LivingCondition').value,
      AccessToHeathcare: document.getElementById('AccessHeathcare').value,
      CulturalFactors: document.getElementById('CulturalFactors').value,
    };
  
    const options = {
      method: 'POST',
      url: 'https://open-ai25.p.rapidapi.com/ask',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'd557b3c892msh229a6379e3a805ep15c210jsnb938b7f28495',
        'X-RapidAPI-Host': 'open-ai25.p.rapidapi.com'
      },
      data: {
        query: JSON.stringify(formData) // Convert form data to JSON string and send as input
      }
    };

    try {
      const response = await axios.request(options);
      console.log(JSON.stringify(formData))
      console.log(response.data);
      setResult(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <div className='ques'>
    <h1>Answer the following Questions</h1>


      <form onSubmit={handleSubmit}>

        
        <h2>Demographic Information</h2>
          <div>
            <label>Name :</label>
              <input id='name' type='text' required />
          </div>
          <div id='multipleInput3'>
            <label>Age :</label>
              <input id='age' type='text' required />
            <label>Gender :</label>
            <select id="gender">
              <option value="">-- Select --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <label>Employment Status :</label>
            <select id="employement">
              <option value="">-- Select --</option>
              <option value="Employed">Employed</option>
              <option value="Unemployed">Unemployed</option>
            </select>
          </div>
          <div>
            <label>Ethnicity :</label>
            <select id="ethnicity">
              <option value="">-- Select --</option>
              <option value="Indian">Indian</option>
              <option value="Japanese">Japanese</option>
              <option value="Italian">Italian</option>
              <option value="Korean">Korean</option>
              <option value="Nigerian">Nigerian</option>
              <option value="Swedish">Swedish</option>
              <option value="Mexican">Mexican</option>
              <option value="Russian">Russian</option>
              <option value="Kenyan">Kenyan</option>
              <option value="Greek">Greek</option>
            </select>
          </div>
          <div>
            <label>Educational Background :</label>
              <input id='education' type='text' required />
          </div>

        
        <h2>Personal History</h2>
          <div>
            <label>Family history of mental health issues :</label>
              <select id='FamilyHistory'>
                <option value="">-- Select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
          </div>
          <div>
            <label>Personal history of mental health treatment or counseling :</label>
            <select id='PersonalHistory'>
                <option value="">-- Select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
          </div>
          <div>
            <label>Traumatic experiences or history of abuse :</label>
            <select id='TraumaticHistory'>
                <option value="">-- Select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
          </div>

        
        <h2>Current Mental Health Symptoms</h2>
          <div id='multipleInput3'>
            <label>Change in Sleep patterns :</label>
            <select id='Sleep input3'>
                <option value="">-- Select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            <label>Change in Appetite :</label>
            <select id='Appetite'>
                <option value="">-- Select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            <label>Energy Level :</label>
            <select id='Energy'>
                <option value="">-- Select --</option>
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
          </div>
          <div>
            <label>Self-reported symptoms (e.g., depression, anxiety) :</label>
              <input id='selfReportSymptoms' type='text' required />
          </div>

        
        <h2>Medical History</h2>
          <div>
            <label>Chronic medical conditions :</label>
            <select id='ChronicMedical'>
                <option value="">-- Select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
          </div>
          <div>
            <label>Current medications :</label>
            <select id='CurentMedical'>
                <option value="">-- Select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
          </div>
          <div>
            <label>History of substance abuse :</label>
            <select id='SubstaceAbuse'>
                <option value="">-- Select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
          </div>

        
        <h2>Social Support</h2>
          <div>
            <label>Availability of a support system (family, friends, community) :</label>
            <select id='Support'>
                <option value="">-- Select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div id='multipleInput2'>
            <label>Relationship quality :</label>
            <select id='Relationship'>
                <option value="">-- Select --</option>
                <option value="HighlySatisfied">Highly Satisfied</option>
                <option value="JustSatisfied">Just Satisfied</option>
                <option value="NotSatisfied">Not Satisfied</option>
              </select>
            <label>Social isolation indicators :</label>
            <select id='Isolation'>
                <option value="">-- Select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
          </div>

        
        <h2>Stressors and Life Events</h2>
          <div>
            <label>Recent life events or stressors :</label>
              <input id='RecentLifeEvents' type='text' required />
          </div><div>
            <label>Coping mechanisms :</label>
              <input id='CopingMechanism' type='text' required />
          </div>

        
        <h2>Personality Traits</h2>
          <div>
            <label>Personality assessments (e.g., Big Five personality traits) :</label>
              <input id='PersonalityAssessment' type='text' required />
          </div>

        
        <h2>Behavirol Patterns</h2>
          <div>
            <label>Changes in behavior :</label>
            <select id='ChangesBehavior'>
                <option value="">-- Select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
          </div>
          <div>
            <label>Patterns of avoidance or engagement in risky behaviors :</label>
            <select id='RiskyBehaviors'>
                <option value="">-- Select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
          </div>

        
        <h2>Self-Reported Measures</h2>
          <div>
            <label>Questionnaires and self-assessment tools for mental health :</label>
              <input id='Questionaries' type='text' required />
          </div>
          <div>
            <label>Subjective well-being scales :</label>
              <input id='Subjective' type='text' required />
          </div>

        
        <h2>Cognitive Functioning</h2>
          <div>
            <label>Cognitive assessments :</label>
              <input id='Cognitive' type='text' required />
          </div>
          <div>
            <label>Thought patterns and cognitive distortions :</label>
              <input id='Thought' type='text' required />
          </div>

        
        <h2>Functional Impairment</h2>
          <div>
            <label>Impact of mental health on daily functioning (work, relationships, self-care) :</label>
              <input id='Impact' type='text' required />
          </div>

        
        <h2>Environment Factors</h2>
          <div id='multipleInput3'>
            <label>Living conditions :</label>
            <select id='LivingCondition'>
                <option value="">-- Select --</option>
                <option value="Very Good">Very Good</option>
                <option value="Good">Good</option>
                <option value="Poor">Poor</option>
                <option value="Very Poor">Very Poor</option>
            </select>
            <label>Access to healthcare :</label>
            <select id='AccessHeathcare'>
                <option value="">-- Select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            <label>Cultural factors :</label>
              <input id='CulturalFactors' type='text' required />
          </div>

          
          <button type='submit'>Send</button>
      </form>

      {loading && <div className="loading">Loading...</div>} {/* Show loading indicator if loading is true */}
      {result && <Result result={result} />} {/* Show the Result component if result is not null */}

    </div>
  
  )
}

export default Ques