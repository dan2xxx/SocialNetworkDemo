import React from 'react'
import { connect } from 'react-redux'
import classes from './../../Header/Header.module.css'
import { useForm } from "react-hook-form";
import { Redirect } from 'react-router-dom';
import {changeSearchTag} from './../../../redux/user-reducer'


const Search = (props) => {

    const [redirect, setRedirect] = React.useState(false)
    const [searchInput, setSearchInput] = React.useState('')

    React.useEffect(() => {
        
        
        if (redirect === true) {
            
            setRedirect(false)
        }

    }, [redirect])


    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        //debugger
        console.log(data) 
        props.changeSearchTag(data.searchData)
        setRedirect(true)  
        setSearchInput(data.searchData)  
        e.target.reset()
    }

    return (
        <div  >
        {redirect ? <Redirect to={'/search/'} /> : null }

        <form className={classes.searchForm} onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='search' ref={register({ required: true })} name='searchData'></input>
        </form>
        </div>
   )
    
}




const mapStateToProps = (state) => {
    
    return ({
    
    })
}

const SearchContainer = connect (mapStateToProps, {changeSearchTag})(Search)

export default SearchContainer