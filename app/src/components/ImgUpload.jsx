import React, { Component, useEffect, useState } from "react"
import { Modal, Table, Upload } from "antd"
import { useDispatch } from "react-redux"
import { asyncImgList } from "../reducers/imgList"
const ImgUpload = ({ imgList }) => {
    const dispatch = useDispatch()
    const [fileList, setFileList] = useState(imgList)
    const uploadButton = (
        <div>
            <div
                style={{
                    marginTop: 8,
                }}>
                Upload
            </div>
        </div>
    )
    const handleChange = ({ fileList: newFileList }) => {
        console.log(fileList)
        let List = newFileList.map((v, i) => {
            if (v.response && v.response.code == 0) {
                return { uid: i, url: v.response.result }
            } else {
                return { uid: i, url: "" }
            }
        })
        console.log(fileList)
        dispatch(asyncImgList(List))
        setFileList(newFileList)
    }
    return (
        <>
            <Upload
                action="/Home/Apis/Index/_c/upload"
                listType="picture-card"
                fileList={fileList}
                name="file"
                multiple
                isImageUrl={file => true}
                onChange={handleChange}
                data={{ type: "upload" }}>
                {uploadButton}
            </Upload>
        </>
    )
}

export default ImgUpload
