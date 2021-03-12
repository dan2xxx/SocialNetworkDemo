import React, { useRef } from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Form, Field } from 'react-final-form'
import { maxLength } from './../../../utils/validators'


const MyPosts = (props) => {




    const postsData = props.profilePage.postsData
    const userData = props.userData.demoUserList

    const onSubmit = (data) => {
        //console.log(data)
        props.addPost(data.Post)
    }


    return (
        <div className={classes.posts}>



            <div>
                <Form

                    onSubmit={onSubmit}
                    render={
                        ({ handleSubmit, form }) => (
                            <form onSubmit={(event) => {
                                const promise = handleSubmit(event);
                                console.log(handleSubmit(event))
                                form.reset();

                                return promise;

                            }}>
                                <h3>Thread</h3>

                                <Field

                                    name='Post'
                                    validate={maxLength(30)}>
                                    {({ input, meta }) => (
                                        <div>
                                            <textarea {...input} type='text' placeholder='Enter post here:' className={classes.post_input} />
                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                            {console.log()}
                                        </div>
                                    )

                                    }

                                </Field>

                                <button type="submit" className={classes.button}>Add post</button>

                            </form>
                        )
                    }

                />


            </div>

            {postsData.map((post, index) => <Post key={'Post: ' + index} name={post.name} text={post.text} userData={userData[post.id]} />)}


        </div>
    )
}

export default MyPosts;