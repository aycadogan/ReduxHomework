import React from 'react'
import {connect} from 'react-redux'

import {selectPostsByUserOne } from '../redux/post.selector'

let count = 0


const Posts = ({ postsArr }) => {

    console.log(`Posts render: ${++count}`)

    return(
        <div>
            <h3>Posts</h3>
            <ul>
                {
                    postsArr.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({ 
    //  postsArr: state.postsObj.posts 
    // postsArr: state.postsObj.posts.filter(post => post.author === 'user-1')
    postsArr: selectPostsByUserOne(state)
})

export default connect(mapStateToProps)(Posts)