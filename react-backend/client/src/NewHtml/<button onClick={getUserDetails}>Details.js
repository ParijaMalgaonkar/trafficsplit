<button onClick={getUserDetails}>Details</button>
                {
                  details && (
                  <div>
                    <h1>{details.IPv4}</h1>
                    <br />
                    <h1>{details.country_name}</h1>
                  </div>
                )}


                const [details, setDetails] = useState(null);
                const getUserDetails = () => {
                  fetch("https://geolocation-db.com/json/fb363670-e22a-11eb-a464-59f706281067")
                  .then(response => response.json())
                  .then(deets => setDetails(deets));
                }