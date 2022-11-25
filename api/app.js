import { serve,v1 } from './deps.js'
// import { grade } from './grade.js'
import { executeQuery } from './database.js'


const gradingService = async(entry) => {
  console.log("gradingservice function props", entry)
  await fetch("http://grading:7779/queue", {method: 'POST', 
   headers: {
    'Content-Type': 'application/json',
  },
 body: JSON.stringify({queueEntry: entry})})
}

const handleRequest = async (request) => {
  const pathname = new URL(request.url).pathname
  console.log('- -- ---')

  if (request.method === 'POST' && pathname === '/api') {
    console.log('---- in api post---- expecting form data')
    const formData = await request.formData()
    const code = formData.get('code')
    const user_id = await request.headers.get('authorization')
    console.log("----the queue ----")
    await gradingService({user_id, code})
    return new Response(JSON.stringify({ result: "JEE" }))
  }

  if (pathname === '/api/users' && request.method === 'GET') {
    let user_id

    if ((await request.headers.has('authorization')) === false) {
      user_id = v1.generate()
      console.log('generated userid', user_id)
      await executeQuery(
        'INSERT INTO users (user_id) VALUES ($user_id)',
        { user_id: user_id }
      )
    } else {
      user_id = await request.headers.get('authorization')
    }

    const user = await executeQuery(
      'SELECT * FROM users WHERE user_id = $user_id',
      { user_id: user_id }
    )

    return new Response(JSON.stringify(user.rows[0]))
  }
}

serve(handleRequest, { port: 7777 })
