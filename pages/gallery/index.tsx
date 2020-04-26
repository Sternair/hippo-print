import React from 'react'
import Layout from '../../components/Layout/Layout'
import { mockDesigns } from '../../mocks/mockDesigns'
import { Card } from '../../components/Card/Card'
import { getDisplayDate } from '../../utils'

const GalleryPage: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-center">
        Gallery
      </h1>
      <div className="row">
        <div className="col-3">
          <h5>Filter</h5>
        </div>
        <div className="col-9">
          <h5>Designs</h5>
          {mockDesigns.map((design) => (
            <Card key={design.id}>
              <div className="row p-3">
                <div className="col-5">
                  <img src={design.imageUrl} className="img-fluid"/>
                </div>
                <div className="col-7">
                  <h5>{design.title}</h5>
                  <p>by {design.createdBy}, {getDisplayDate(design.createdAt)}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default GalleryPage
