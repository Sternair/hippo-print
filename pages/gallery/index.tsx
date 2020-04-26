import React from 'react'
import Layout from '../../components/Layout/Layout'
import { mockDesigns } from '../../mocks/mockDesigns'
import { Card } from '../../components/Card/Card'

const GalleryPage: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-center">
        Gallery
      </h1>
      <div className="row">
        <div className="col-3">
          Filters
        </div>
        <div className="col-9">
          {mockDesigns.map((design) => (
            <Card key={design.id}>
              <div className="row p-3">
                <div className="col-5">
                  <img src={design.imageUrl} className="img-fluid"/>
                </div>
                <div className="col-7">
                  {design.title}
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
