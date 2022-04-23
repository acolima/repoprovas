import { useState } from 'react' 
import Term from '../Term'

function TestsByTerm() {
  const [expandedTerm, setExpandedTerm] = useState(false)

  const handleChangeTerm = (term) => (event, isExpanded) => {
    setExpandedTerm(isExpanded ? term : false);
  };

  return (
    <div >
      <Term term='term1' handleChangeTerm={handleChangeTerm} expandedTerm={expandedTerm}/>
      <Term term='term2' handleChangeTerm={handleChangeTerm} expandedTerm={expandedTerm}/>
      <Term term='term3' handleChangeTerm={handleChangeTerm} expandedTerm={expandedTerm}/>
    </div>
  )
}

export default TestsByTerm
