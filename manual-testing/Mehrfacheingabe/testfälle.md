## Testfälle

| Test Case ID | Description                     | Steps                                         | Expected Result                    |
|--------------|---------------------------------|-----------------------------------------------|------------------------------------|
| TC_01        | Login with valid credentials    | 1. Go to login page  
2. Enter valid email  
3. Enter valid password  
4. Click login | User is redirected to dashboard |
| TC_002       | Login with invalid password     | 1. Go to login page  
2. Enter valid email  
3. Enter invalid password  
4. Click login | Error message is displayed      |
| TC_003       | Login with empty fields         | 1. Go to login page  
2. Leave fields empty  
3. Click login | Validation errors appear        |
