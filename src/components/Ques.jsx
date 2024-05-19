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
      prompt: "You are the best psychologist I know please help me in predicting my mental health and provide me my predicted mental health in more accurate and informative way, I have taken the data from a survey form and these are my details :",
      name: document.getElementById('name').value,
      age: document.getElementById('age').value,
      gender: document.getElementById('gender').value,
      employement: document.getElementById('employement').value,
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

      IHaveAvailabilityOfSupportSystemFromFamilyAndFriends: document.getElementById('Support').value,
      IHaveGoodRelationshipQuality: document.getElementById('Relationship').value,
      IHaveSocialIsolationIndicators: document.getElementById('Isolation').value,

      RecentLifeEventsOrStressors: document.getElementById('RecentLifeEvents').value,
      CopingMechanism: document.getElementById('CopingMechanism').value,

      PersonalityAssessment: document.getElementById('PersonalityAssessment').value,

      INoticedAnyChangesInYourBehavior: document.getElementById('ChangesBehaviors').value,
      DoIFindYourselfAvoidingCertainActivitiesOrSituationsMoreThanUsual: document.getElementById('AvoidingBehaviors').value,
      DoIFindYourselfEngagingInRiskyBehaviors: document.getElementById('RiskyBehaviors').value,

      IExperiencedLossOfInterestOrPleasureInActivitiesYouUsuallyEnjoy: document.getElementById('lossOfInterest').value,
      OverallIAmSatisfiedWithMyLife: document.getElementById('SatisfiedLife').value,

      HowOftenDoIFindMyselfEasilyDistracted: document.getElementById('Cognitive').value,
      ToWhatExtendDoIOftenCatastrophizeSituation: document.getElementById('Thought').value,

      HaveIEverMissedSchoolOrSocialEngagementBecauseOfMentalHealthConditions: document.getElementById('Impact').value,

      LivingConditions: document.getElementById('LivingCondition').value,
      AccessToHeathcare: document.getElementById('AccessHeathcare').value,
      HowConcernAmIAboutEnvironmentalIssuesInMyCommunity: document.getElementById('CulturalFactors').value,
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

    <>
    <div className='ques'>
    <h1>Answer the following Questions</h1>


      <form onSubmit={handleSubmit}>

        
        <h2>Demographic Information</h2>
          <div>
            <label>Name :</label>
              <input id='name' type='text' placeholder='Enter your Name' required />
          </div>
          <div id='multipleInput3'>
            <label>Age :</label>
              <input id='age' type='number' placeholder='Enter your Age' required />
          </div>
          <div>
            <label>Gender :</label>
            <select id="gender">
              <option value="">-- Select --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div>
            <label>Employment Status :</label>
            <select id="employement">
              <option value="">-- Select --</option>
              <option value="Employed">Employed</option>
              <option value="Unemployed">Unemployed</option>
            </select>
          </div>
          <div>
            <label>Educational Background :</label>
              <input id='education' type='text' placeholder='Tell us about your Education' required />
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
          <div>
            <label>Change in Sleep patterns :</label>
            <select id='Sleep'>
                <option value="">-- Select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
          </div>
          <div>
            <label>Change in Appetite :</label>
            <select id='Appetite'>
                <option value="">-- Select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
          </div>
          <div>
            <label>Energy Level :</label>
            <select id='Energy'>
                <option value="">-- Select --</option>
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
          </div>
          <div>
            <label>Self-reported symptoms (e.g., depression, anxiety, mood swing, etc) :</label>
              <input id='selfReportSymptoms' type='text' placeholder='Have you ever noticed any Symptom' required />
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
            <label>You have availability of a support system (family, friends, community) :</label>
            <select id='Support'>
            <option value="">-- Select --</option>
                <option value="Stongly Agree">Strongly Agree</option>
                <option value="Agree">Agree</option>
                <option value="Neutral">Neutral</option>
                <option value="Disagree">Disagree</option>
                <option value="Strongly Disagree">Strongly Disagree</option>
              </select>
            </div>
            <div>
            <label>You have a Good relationship quality :</label>
            <select id='Relationship'>
            <option value="">-- Select --</option>
                <option value="Stongly Agree">Strongly Agree</option>
                <option value="Agree">Agree</option>
                <option value="Neutral">Neutral</option>
                <option value="Disagree">Disagree</option>
                <option value="Strongly Disagree">Strongly Disagree</option>
              </select>
            </div>
            <div>
            <label>You have a Social isolation indicators :</label>
            <select id='Isolation'>
                <option value="">-- Select --</option>
                <option value="Stongly Agree">Strongly Agree</option>
                <option value="Agree">Agree</option>
                <option value="Neutral">Neutral</option>
                <option value="Disagree">Disagree</option>
                <option value="Strongly Disagree">Strongly Disagree</option>
              </select>
          </div>

        
        <h2>Stressors and Life Events</h2>
          <div>
            <label>Recent life events or stressors :</label>
              <select id='RecentLifeEvents'>
                <option value="">-- Select --</option>
                <option value="Work-related stressors">Work-related stressors</option>
                <option value="Financial stressors">Financial stressors</option>
                <option value="Family-related stressors">Family-related stressors</option>
                <option value="Health-related stressors">Health-related stressors</option>
                <option value="Life transitions">Life transitions</option>
                <option value="Traumatic events">Traumatic events</option>
                <option value="Legal or criminal stressors">Legal or criminal stressors</option>
                <option value="Educational stressors">Educational stressors</option>
                <option value="Social stressors">Social stressors</option>
                <option value="Housing-related stressors">Housing-related stressors</option>
                <option value="Substance abuse or addiction">Substance abuse or addiction</option>
                <option value="Cultural or identity-related stressors">Cultural or identity-related stressors</option>
                <option value="Technology-related stressors">Technology-related stressors</option>
                <option value="Transportation-related stressors">Transportation-related stressors</option>
                <option value="Natural or environmental stressors">Natural or environmental stressors</option>
                <option value="Parenting-related stressors">Parenting-related stressors</option>
                <option value="Spiritual or existential stressors">Spiritual or existential stressors</option>
                <option value="Legal immigration-related stressors">Legal immigration-related stressors</option>
                <option value="Community-related stressors">Community-related stressors</option>
                <option value="Educational/career advancement stressors">Educational/career advancement stressors</option>
                <option value="None">None</option>
                <option value="other">Other</option>
              </select>
          </div><div>
            <label>Coping mechanisms :</label>
              <select id='CopingMechanism'>
                <option value="">-- Select --</option>
                <option value="Physical Exercise">Physical Exercise</option>
                <option value="Mindfulness and Meditation">Mindfulness and Meditation</option>
                <option value="Seek Social Support">Seek Social Support</option>
                <option value="Journaling">Journaling</option>
                <option value="Sleep">Sleep</option>
                <option value="Binge Eating">Binge Eating</option>
                <option value="Hobbies and Creativity">Hobbies and Creativity</option>
                <option value="Sugar Intake">Sugar Intake</option>
                <option value="Substance Abuse">Substance Abuse</option>
                <option value="None">None</option>
                <option value="Other">Other</option>
              </select>
          </div>

        
        <h2>Personality Traits</h2>
          <div>
            <label>Personality assessments (e.g., Big Five personality traits) :</label>
              <select id='PersonalityAssessment'>
                <option value="">-- Select --</option>
                <option title="I like trying new things, I enjoy thinking about new ideas, I like being creative" value="Openness- I like trying new things, I enjoy thinking about new ideas, I like being creative">Openness</option>
                <option title="I am careful and organized, I always finish what I start, I like making plans and following them" value="Conscientiousness- I am careful and organized, I always finish what I start, I like making plans and following them">Conscientiousness</option>
                <option title="I like being with people, I enjoy parties and social events, I'm usually the one to start conversations" value="Extraversion- I like being with people, I enjoy parties and social events, I'm usually the one to start conversations">Extraversion</option>
                <option title="I am kind to others, I like helping people, I try to get along with everyone" value="Agreeableness- I am kind to others, I like helping people, I try to get along with everyone">Agreeableness</option>
                <option title="I worry a lot, I get upset easily, I often feel sad or anxious" value="Neuroticism- I worry a lot, I get upset easily, I often feel sad or anxious">Neuroticism</option>
              </select>
          </div>

        
        <h2>Behavirol Patterns</h2>
          <div>
            <label>Have you noticed any changes in your behavior recently? :</label>
            <select id='ChangesBehaviors'>
                <option value="">-- Select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
          </div>
          <div>
            <label>Do you find youself avoiding certain activities or situations more than usual? :</label>
            <select id='AvoidingBehaviors'>
                <option value="">-- Select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
          </div>
          <div>
            <label>Do you find youself engaging in risky behaviours more frequently than before? :</label>
            <select id='RiskyBehaviors'>
                <option value="">-- Select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
          </div>

        
        <h2>Self-Reported Measures</h2>
          <div>
            <label>Have you experienced a loss of interest or pleasure in activities you usually enjoy? :</label>
              {/* <input id='Questionaries' type='text' required /> */}
              <select id='lossOfInterest'>
                <option value="">-- Select --</option>
                <option value="Not at all">Not at all</option>
                <option value="Several days">Several days</option>
                <option value="More than half the days">More than half the days</option>
                <option value="Nearly every day">Nearly every day</option>
              </select>
          </div>
          <div>
            <label>Overall I'm Satisfied with my life :</label>
              {/* <input id='Subjective' type='text' required /> */}
              <select id='SatisfiedLife'>
                <option value="">-- Select --</option>
                <option value="Stongly Agree">Strongly Agree</option>
                <option value="Agree">Agree</option>
                <option value="Neutral">Neutral</option>
                <option value="Disagree">Disagree</option>
                <option value="Strongly Disagree">Strongly Disagree</option>
              </select>
          </div>

        
        <h2>Cognitive Functioning</h2>
          <div>
            <label>How often do you find youself easily distracted? :</label>
              {/* <input id='Cognitive' type='text' required /> */}
              <select id='Cognitive'>
                <option value="">-- Select --</option>
                <option value="Rarely">Rarely</option>
                <option value="Occasionally">Occasionally</option>
                <option value="Frequently">Frequently</option>
                <option value="Always">Always</option>
                {/* <option value="Strongly Disagree">Strongly Disagree</option> */}
              </select>
          </div>
          <div>
            <label>To what extent do you often catastrophize situations? (Expecting the worst outcome)</label>
            <select id='Thought'>
                <option value="">-- Select --</option>
                <option value="Rarely">Rarely</option>
                <option value="Occasionally">Occasionally</option>
                <option value="Frequently">Frequently</option>
                <option value="Always">Always</option>
              </select>
          </div>

        
        <h2>Functional Impairment</h2>
          <div>
            <label>Have you ever missed work, school, or social engagements because of your mental health conditions? :</label>
              {/* <input id='Impact' type='text' required /> */}
              <select id='Impact'>
                <option value="">-- Select --</option>
                <option value="Never">Never</option>
                <option value="Rarely">Rarely</option>
                <option value="Sometimes">Sometimes</option>
                <option value="Often">Often</option>
                <option value="Always">Always</option>
            </select>
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
            </div>
            <div>
            <label>Access to healthcare :</label>
            <select id='AccessHeathcare'>
                <option value="">-- Select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
          </div>
          <div>
            <label>How concerned are you about environmental issues in your community? :</label>
              {/* <input id='CulturalFactors' type='text' required /> */}
              <select id='CulturalFactors'>
                <option value="">-- Select --</option>
                <option value="Somewhat Concern">Somewhat Concern</option>
                <option value="Neutral">Neutral</option>
                <option value="Not very Concern">Not very Concern</option>
                <option value="Not Concern at all">Not Concern at all</option>
            </select>
          </div>

          
          <button type='submit'>Send</button>
      </form>

      {loading && <div className="loading">Loading...</div>} {/* Show loading indicator if loading is true */}
    </div>
      {result && <Result result={result} />} {/* Show the Result component if result is not null */}

  </>
  )
}

export default Ques