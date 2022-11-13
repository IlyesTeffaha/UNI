import React from 'react'
import '../css/MultiStepForm.css'

function CompleteSignup({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
    {/* <input
      type="date"
      value={formData.birthday}
      onChange={(event) =>
        setFormData({ ...formData, birthday: event.target.value })
      }
    /> */}
    {/* <input
      type="text"
      placeholder="Address..."
      value={formData.address}
      onChange={(event) =>
        setFormData({ ...formData, address: event.target.value })
      }
    />
    <input
      type="number"
      placeholder="Enter Phone Number..."
      value={formData.PhoneNumber}
      onChange={(event) =>
        setFormData({ ...formData, PhoneNumber: event.target.value })
      }
    /> */}
    <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Birthday</label>
  <input type="date" class="form-control" required id="formGroupExampleInput"  value={formData.birthday}
      onChange={(event) =>
        setFormData({ ...formData, birthday: event.target.value })
      }/>
</div>
<div class="mb-3 address">
  <label for="formGroupExampleInput2" class="form-label">Address</label>
  <input type="text" class="form-control " required id="formGroupExampleInput2" placeholder="Enter your address" value={formData.address}
      onChange={(event) =>
        setFormData({ ...formData, address: event.target.value })
      }/>
</div>

<div class="row mb-3">
  <div class="col">
  <label for="postalcode" class="form-label">Postal Code</label>
    <input type="number" required class="form-control" placeholder="Enter postal code"  id="postalcode" value={formData.PostalCode}
      onChange={(event) =>
        setFormData({ ...formData, PostalCode: event.target.value })
      }/>
  </div>
  <div class="col">
  <label for="phonenumber" class="form-label">Phone Number</label>

    <input type="number" required class="form-control" placeholder="Enter phone number" id="phonenumber" value={formData.PhoneNumber}
      onChange={(event) =>
        setFormData({ ...formData, PhoneNumber: event.target.value })
      }/>
  </div>
</div>

<div className='selectinput'>
<label for="selectid" class="form-label">Choose your section</label>
    <select class="form-select mb-5 mx-1" aria-label="Default select example"   onChange={(event) =>
        setFormData({ ...formData, bacsection: event.target.value })
      } id="selectid" >
  <option selected>{formData.bacsection}</option>
  <option value="Math" >Math</option>
  <option value="Science">Science</option>
  <option value="Technique">Technique</option>
  <option value="Lettre">Lettre</option>
  <option value="Sport">Sport</option>
  <option value="Economie">Economie</option>
 


</select>
</div>



  </div>
  )
}

export default CompleteSignup