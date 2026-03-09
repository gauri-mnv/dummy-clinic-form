import React, { useState } from 'react';

const rawData = {
  formData: `[{"frm_daily_id":"QUn2","frm_daily_name":"HeadingText","frm_daily_type":"HeadingText","frm_daily_component":"HeadingText","frm_daily_label":"somwar -shaniwar","frm_daily_hedingSize":"small","frm_daily_hedingAlignment":"center"},{"frm_daily_id":"tJD9","frm_daily_name":"HeadingText","frm_daily_type":"HeadingText","frm_daily_component":"HeadingText","frm_daily_label":"ravivar banda","frm_daily_hedingSize":"small","frm_daily_hedingAlignment":"center"},{"frm_daily_id":"02U3","frm_daily_name":"ShortText","frm_daily_type":"text","frm_daily_component":"ShortText","frm_daily_label":"Vinanti","frm_daily_placeholder":"krupaya padatrane baherach kadhavit...."},{"frm_daily_id":"Ktl7","frm_daily_name":"SingleSelect","frm_daily_type":"radio","frm_daily_component":"SingleSelect","frm_daily_label":"vela","frm_daily_option":[{"value":"sakal 8 -10"},{"value":"dupar 1 -3"},{"value":"sandhyakal 6-9"}]},{"frm_daily_id":"oT0v","frm_daily_name":"Time","frm_daily_type":"time","frm_daily_component":"Time","frm_daily_label":"vel niwadli ka ?","frm_daily_placeholder":"8-10"},{"frm_daily_id":"vorb","frm_daily_name":"DatePicker","frm_daily_type":"date","frm_daily_component":"DatePicker","frm_daily_label":"Date Picker"},{"frm_daily_id":"T3GK","frm_daily_name":"MultiSelect","frm_daily_type":"checkbox","frm_daily_component":"MultiSelect","frm_daily_label":"kan - nak -ghasa-doke -dole","frm_daily_option":[{"value":"kan"},{"value":"nak"},{"value":"ghasa"},{"value":"dole "}]},{"frm_daily_id":"jWxh","frm_daily_name":"Signature","frm_daily_type":"signature","frm_daily_component":"Signature","frm_daily_label":"mazhi sahi"},{"frm_daily_id":"qS71","frm_daily_name":"StarRating","frm_daily_type":"number","frm_daily_component":"StarRating","frm_daily_label":"anandi aahat na !"}]`,
  patientId: '79',
  locationId: 'CL001LC005',
};

const DynamicForm = () => {
  const [step, setStep] = useState(1);
  const formItems = JSON.parse(rawData.formData);

  return (
    <div className="form-card">
      <div className="clinic-header">
        <div className="logo">✚</div>
        <div className="doctor-info">
          <h2>Dr. Gaurav Bidwai</h2>
          <p>MBBS, MD - General Medicine | Page {step} of 2</p>
        </div>
      </div>

      <div className="step-container">
        {step === 1 ? (
          /* --- PAGE 1: DYNAMIC FORM (NEGINAL NEST LOGIC) --- */
          <div className="fade-in">
            <h3 className="section-title">Step 1: Patient Details</h3>
            {formItems.map((item) => (
              <div key={item.frm_daily_id} className="field-row">
                {item.frm_daily_component === 'HeadingText' && (
                  <h3 style={{ textAlign: item.frm_daily_hedingAlignment, color: '#444' }}>
                    {item.frm_daily_label}
                  </h3>
                )}

                {item.frm_daily_component === 'ShortText' && (
                  <>
                    <label>{item.frm_daily_label}</label>
                    <input type="text" defaultValue="Padatrane baher kadhli ahet." readOnly />
                  </>
                )}

                {item.frm_daily_component === 'SingleSelect' && (
                  <>
                    <label>{item.frm_daily_label}</label>
                    <div className="options-container">
                      {item.frm_daily_option.map((opt, idx) => (
                        <div key={idx} className={`option-box ${idx === 0 ? 'selected' : ''}`}>
                          <input type="radio" checked={idx === 0} readOnly /> {opt.value}
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {item.frm_daily_component === 'MultiSelect' && (
                  <>
                    <label>{item.frm_daily_label}</label>
                    <div className="options-container">
                      {item.frm_daily_option.map((opt, idx) => (
                        <div key={idx} className={`option-box ${idx === 0 || idx === 2 ? 'selected' : ''}`}>
                          <input type="checkbox" checked={idx === 0 || idx === 2} readOnly /> {opt.value}
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {item.frm_daily_component === 'Time' && (
                  <>
                    <label>{item.frm_daily_label}</label>
                    <input type="time" defaultValue="09:30" readOnly />
                  </>
                )}

                {item.frm_daily_component === 'Signature' && (
                  <>
                    <label>{item.frm_daily_label}</label>
                    <div className="signature-area">Gaurav Bidwai</div>
                  </>
                )}
              </div>
            ))}
            <button className="nav-btn next" onClick={() => setStep(2)}>Next: Vitals Check →</button>
          </div>
        ) : (
          /* --- PAGE 2: DUMMY DATA --- */
          <div className="fade-in">
            <h3 className="section-title">Step 2: Vitals & Observations</h3>
            <div className="vitals-grid">
              <div className="vital-box"><strong>Weight:</strong> 72 kg</div>
              <div className="vital-box"><strong>BP:</strong> 120/80 mmHg</div>
              <div className="vital-box"><strong>Pulse:</strong> 72 bpm</div>
              <div className="vital-box"><strong>Temp:</strong> 98.6°F</div>
            </div>
            <div className="field-row" style={{ marginTop: '25px' }}>
              <label>Clinical Notes:</label>
              <textarea rows="4" defaultValue="Patient is stable. No major issues found." readOnly />
            </div>
            <div className="button-group">
              <button className="nav-btn back" onClick={() => setStep(1)}>← Back</button>
              <button className="nav-btn finish" onClick={() => alert('Saved!')}>Complete</button>
            </div>
          </div>
        )}
      </div>

      <div className="meta">
        Patient ID: {rawData.patientId} | Portal: {rawData.locationId}
      </div>
    </div>
  );
};

export default DynamicForm;