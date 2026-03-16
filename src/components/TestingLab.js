import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const scenarios = {
  "medical-history": {
    title: "Step 3: Medical History",
    fields: [
      { label: "Past Medical History", type: "textarea", placeholder: "Any surgeries?" },
      { label: "Current Medications", type: "text", placeholder: "e.g. Paracetamol" },
      { label: "Allergies", type: "text", placeholder: "Peanuts, Dust, etc." }
    ]
  },
  "css-stress-test": {
    title: "Layout & CSS Stress Test",
    fields: [
      { label: "This is a very very long label to check if the PDF layout breaks when the text exceeds the container width", type: "text" },
      { label: "Grid Test 1", type: "text" },
      { label: "Grid Test 2", type: "text" },
      { label: "Check Overlap", type: "textarea" }
    ]
  }
};

const TestingLab = () => {
  const { scenario } = useParams();
  const navigate = useNavigate();
  const data = scenarios[scenario];

  if (!data) return <div>Scenario not found! Try /test-lab/medical-history</div>;

  return (
    <div className="form-step card shadow-lg">
      <div className="header-blue">
        <h3>{data.title}</h3>
        <p>Scenario Mode: {scenario}</p>
      </div>

      <div className="grid-container" style={{ padding: '20px' }}>
        {data.fields.map((field, index) => (
          <div key={index} className="input-group full-width">
            <label className="font-bold block mb-2">{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea placeholder={field.placeholder} className="w-full p-2 border rounded" rows="3" />
            ) : (
              <input type={field.type} placeholder={field.placeholder} className="w-full p-2 border rounded" />
            )}
          </div>
        ))}
      </div>

      <div className="button-group mt-4 flex justify-between">
        <button className="prev bg-gray-300 p-2 rounded" onClick={() => navigate(-1)}>← Back</button>
        {/* Puppeteer isi class ko dhund kar PDF capture karega */}
        <button className="next bg-blue-600 text-white p-2 rounded" onClick={() => alert("Capturing Final PDF...")}>
          Finish & Generate PDF
        </button>
      </div>
    </div>
  );
};

export default TestingLab;