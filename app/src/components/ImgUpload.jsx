import { Upload } from "antd"
import React, { useState } from "react"
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
        let List = newFileList.map((v, i) => {
            if (v.response && v.response.code == 0) {
                return {
                    uid: v.originFileObj ? v.originFileObj.uid : v.uid, url: v.response.result,
                    status: v.status, type: v.type
                }
            } else {
                return { uid: v.originFileObj ? v.originFileObj.uid : v.uid, url: "", status: v.status, type: v.type }
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
                {uploadButton}
            </Upload>
        </>
    )
}

export default ImgUpload
