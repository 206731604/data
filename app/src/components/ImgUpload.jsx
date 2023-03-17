import React, { Component, useEffect, useState } from "react"
import { Modal, Table, Upload } from "antd"
import { useDispatch } from 'react-redux'
import { asyncImgList } from '../reducers/imgList'
const ImgUpload = ({ imgList }) => {
    console.log(imgList)
    const dispatch = useDispatch()
    const [fileList, setFileList] = useState(imgList
        // [
        // {
        // 	uid: "-1",
        // 	name: "image.png",
        // 	// status: "done",
        // 	url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        // },
        // {
        // 	uid: "rc-upload-1678970780203-2",
        // 	lastModified: 1663239550461,
        // 	lastModifiedDate: "2022-09-15T10:59:10.461Z",
        // 	name: "0d6e8e683c0980e33dd5f46d43bca027.jpeg",
        // 	size: 86377,
        // 	type: "image/jpeg",
        // 	percent: 100,
        // 	originFileObj: {
        // 		uid: "rc-upload-1678970780203-2",
        // 	},
        // 	// status: "done",
        // 	response: {
        // 		code: 0,
        // 		msg: "succeed",
        // 		result: "//img-dove.oss-cn-hongkong.aliyuncs.com/8w-study/5ea0902e6b1b403d7a9f9645edad34321678966351.tmp",
        // 	},
        // 	xhr: {},
        // 	img: "//img-dove.oss-cn-hongkong.aliyuncs.com/8w-study/07c75d7b6a08ea3507afb3baae3ec90e1678967297.tmp",
        // 	thumbUrl:
        // 		"//img-dove.oss-cn-hongkong.aliyuncs.com/8w-study/b87bddf82ed52dad5ff9706622967c251678966351.tmp",
        // },
        // ]
    )
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
        let List = fileList.map((v, i) => {
            if (v.response && v.response.code == 0) {
                return { uid: i, url: v.response.result }
            } else {
                return { uid: i, url: "" }
            }
        })
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
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
        </>
    )
}

export default ImgUpload
