import React from 'react'
import { useState } from 'react'


export default function StudentTerms() {
  const [termsCheck, setTermsCheck] = useState(false);
	return (
		<div>
			<ol>
        <li>
          I have not been debarred from appearing at any examination held by any
          government constituted or statutory examination authority of India.
        </li>
        <li>
          1 am not Involved in any criminal case/police investigation and do not
          have any connection with any anti-national organization.{" "}
        </li>
        <li>
          Information given above is true to the best of my knowledge and
          belief.{" "}
        </li>
      </ol>
      <input type="checkbox" name="studentTermsCheck" onClick={() => setTermsCheck(!termsCheck)}/> I Agree to the above terms
      {console.log(termsCheck)}
		</div>
	)
}
