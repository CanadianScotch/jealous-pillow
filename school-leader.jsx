import React, { useState } from 'react';

const SchoolLeaderCard = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const res = await fetch('/_hfunctions/upload', {
      method: 'POST',
      body: JSON.stringify({ file: file.name })
    });
    const data = await res.json();
    setResult(data.message);
  };

  return (
    <div>
      <h3>School Leader Assignment</h3>
      <input type="file" onChange={handleFile} />
      <button onClick={handleUpload}>Upload CSV</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default SchoolLeaderCard;