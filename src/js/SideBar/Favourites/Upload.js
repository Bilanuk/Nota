import React from "react";
import {API_URL} from "../../context";
import axios from "axios";
import './upload.scss'

export default function Upload(register, handleSubmit, errors, refetch) {
    const reqiredMsg = 'This is required field'

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append(`track[title]`, data.title)
        formData.append(`track[author]`, data.author)
        formData.append(`track[image_cover]`, data.picture[0])
        formData.append(`track[track]`, data.track[0])

        axios.post(API_URL + 'track', formData)
            .then(function (response){
                setTimeout(() => {  refetch(); }, 500)
            })
            .catch(function (error) {
                console.log (error.response.data)
            })
    };

    return (
        <form className={'upload-form'} onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group form-el">
                <input {...register('title', { required: reqiredMsg })} className={'text form-control'} type="text" name="title" placeholder={'Title'} />

                <span> {errors.title && errors.title.message}</span>
            </div>

            <div className="form-group form-el">
                <input {...register('author', { required: reqiredMsg })} className={'text form-control'} type="text" name="author" placeholder={'Author'} />
                <span> {errors.author && errors.author.message}</span>
            </div>

            <div className="form-group form-el">
                <label>Cover image</label>
                <input {...register('picture')}
                       className={'text form-control'}
                       type="file" name="picture"
                       placeholder={'Cover image'}
                       accept={"image/png, image/gif, image/jpeg"}
                />
            </div>

            <div className="form-group form-el">
                <label>Track</label>
                <input {...register('track', { required: reqiredMsg })}
                       className={'text form-control'}
                       type="file" name="track"
                       placeholder={'Track'}
                       accept={"audio/mp3"}
                />
                <span> {errors.track && errors.track.message}</span>
            </div>

            <button className={'btn btn-light'}>Submit</button>
        </form>
    );
}
