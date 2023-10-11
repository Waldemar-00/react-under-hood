import { memo } from 'react'
function Article({ show }) {
  console.log('Article')
  return (
    show &&
    <div>
        <h2>Article</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa porro ipsam necessitatibus quo, dolores dignissimos totam? 
        Rerum  porro corrupti nihil, suscipit consectetur debitis facere esse vel similique soluta quia!
        Veritatis ullam pariatur nesciunt temporibus at nemo sequi, natus corporis! Quis, soluta. Exercitationem magnam labore velit 
        excepturi  voluptatibus nostrum dolore molestiae. Ad possimus fugit facilis cupiditate aliquid qui molestiae facere.</p>
        <h2>Conclusion</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ipsum nulla aliquam accusamus laudantium facilis itaque porro 
        nam  dolorem, sunt amet labore recusandae libero laboriosam reiciendis, maxime sequi praesentium voluptates!</p>
    </div>
  )
}
export default memo(Article)