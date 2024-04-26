//Auth token we will use to generate a meeting and connect to it
export const authToken: string =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJjNjZmZmIwYi0yMDQyLTQ0ZTQtOWNkNC01YzJiNGY4ODYyZDkiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwNTQ2MzcyMCwiZXhwIjoxNzA2MDY4NTIwfQ.0VCZTHt1i15sY-_XSEMjJPXU3S6H2zU-CvG43j1xlBY'

// API call to create meeting
export const createMeeting = async ({ token }: { token: string }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: 'POST',
    headers: {
      authorization: `${authToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  })
  //Destructuring the roomId from the response
  const { roomId }: { roomId: string } = await res.json()
  return roomId
}
