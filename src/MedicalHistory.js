import React from 'react';
import { useNavigate } from 'react-router-dom';

const MedicalHistory = ({ formData, setFormData, onPrev, onSubmit }) => {
  return (
    <div className="form-step card">
      <div className="header-blue">
        <h3>Step 3: Comprehensive Medical History</h3>
        <p>Patient ID: {formData.patientId} | Portal: CL001LC005</p>
      </div>

      <div className="grid-container">
        {/* Row 1: Past History */}
        <div className="input-group full-width">
          <label>Past Medical History / Chronic Illness</label>
          <textarea 
            placeholder="e.g. Diabetes, Hypertension, Asthma..."
            value={formData.pastHistory || ''}
            onChange={(e) => setFormData({...formData, pastHistory: e.target.value})}
          />
        </div>

        {/* Row 2: Vitals specific to this page */}
        <div className="input-group">
          <label>Blood Group</label>
          <select 
            value={formData.bloodGroup || ''}
            onChange={(e) => setFormData({...formData, bloodGroup: e.target.value})}
          >
            <option value="">Select</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="AB+">AB+</option>
          </select>
        </div>

        <div className="input-group">
          <label>Allergies (if any)</label>
          <input 
            type="text" 
            placeholder="e.g. Penicillin, Peanuts"
            value={formData.allergies || ''}
            onChange={(e) => setFormData({...formData, allergies: e.target.value})}
          />
        </div>

        {/* Systemic Review - Checkboxes like Image 13a11f */}
        <div className="checkbox-section full-width">
          <label>Systemic Review (Check all that apply):</label>
          <div className="checkbox-grid">
            {['Respiratory', 'Cardiovascular', 'Gastrointestinal', 'Neurological'].map(sys => (
              <label key={sys} className="custom-check">
                <input 
                  type="checkbox" 
                  onChange={(e) => setFormData({
                    ...formData, 
                    systems: {...(formData.systems || {}), [sys]: e.target.checked}
                  })} 
                />
                <span>{sys}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="button-group">
        <button className="prev" onClick={onPrev}>← Back</button>
        <button className="next" onClick={onSubmit}>Finish & Generate Report</button>
      </div>
    </div>
  );
};

export default MedicalHistory;