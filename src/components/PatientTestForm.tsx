import React, { useEffect, useRef, useState } from 'react';
// https://i.ibb.co/nKQ3LHs/xray1.jpg
// https://i.ibb.co/zVHFgLcJ/xray2.jpg

const PatientTestForm = () => {
  const [name, setName] = useState('John Doe');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  //  a dummy signature so the canvas isn't empty
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = "#000080"; // Navy blue ink
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(20, 50);
        ctx.bezierCurveTo(40, 10, 70, 90, 100, 50);
        ctx.stroke();
        ctx.font = "16px 'Brush Script MT', cursive";
        ctx.fillText("Dr. GB", 40, 70);
      }
    }
  }, []);

  return (<>
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', position: 'relative'  }}>
      { /* 1. THE STAMP (Floating/Overlay) */}
      <div className="official-stamp" style={{
        position: 'absolute',
        top: '50px',
        right: '50px',
        width: '120px',
        height: '120px',
        border: '4px double #d32f2f',
        borderRadius: '50%',
        color: '#d32f2f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '14px',
        transform: 'rotate(-15deg)',
        opacity: 0.8,
        zIndex: 10,
        WebkitPrintColorAdjust: 'exact', // Crucial for PDF
        printColorAdjust: 'exact'
      }}>
        CONFIDENTIAL<br/>CLINIC GB
      </div>

      <h1>Patient Intake Record</h1>
      <hr />
      <section style={{ marginBottom: '30px' }}>
        <h3>General Information</h3>
        <div style={{ marginBottom: '10px' }}>
          <label>Full Name: </label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div>
          <label>Urgency Level: </label>
          <input type="radio" name="urgency" value="high" /> High
          <input type="radio" name="urgency" value="low" defaultChecked /> Low
        </div>
      </section>

      {/* 2. Multiple Images (Testing img.onload) */}
      <section style={{ marginBottom: '30px' }}>
        <h3>Diagnostic Images (X-Rays)</h3>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            <p>Scan A</p>
            <img 
              src="https://i.ibb.co/nKQ3LHs/xray1.jpg" 
              alt="Random Medical Scan" 
              style={{ border: '1px solid #ccc', borderRadius: '8px' }}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <p>Scan B</p>
            <img 
              src=" https://i.ibb.co/zVHFgLcJ/xray2.jpg" 
              alt="Random Medical Scan 2" 
              style={{ border: '1px solid #ccc', borderRadius: '8px' }}
            />
          </div>
        </div>
      </section>

      {/* 3. Audio & Video (Testing oncanplaythrough) */}
      <section style={{ marginBottom: '30px' }}>
        <h3>Media Observations</h3>
        
        <div style={{ marginBottom: '20px' }}>
          <p><strong>Heartbeat Audio:</strong></p>
          <audio controls style={{ width: '100%' }}>
            <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <div>
          <p><strong>Movement Assessment Video:</strong></p>
          <video controls width="100%" poster="https://i.ibb.co/nKQ3LHs/xray1.jpg">
            <source src="https://youtu.be/lYAjJZ0YlKY?si=JVkspnobVsZA-nkX" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      {/* 2. THE SIGNATURE SECTION */}
      <section style={{ marginTop: '50px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          
          <div>
            <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>Physician Signature</p>
            <div style={{ borderBottom: '2px solid #000', width: '250px', marginBottom: '10px' }}>
              <canvas 
                ref={canvasRef} 
                width="250" 
                height="80" 
                className="signature-pad"
                style={{ display: 'block' }} 
              />
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0 }}>Date: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>
      {/* CSS injection for print-specific behavior */}
      <style>{`
        @media print {
          .official-stamp {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .signature-pad {
            page-break-inside: avoid;
          }
        }
      `}</style>

      <footer style={{ marginTop: '50px', fontSize: '12px', color: '#666' }}>
        Form ID: {Math.random().toString(36).substr(2, 9)}
      </footer>
    </div></>
  );
};

export default PatientTestForm;