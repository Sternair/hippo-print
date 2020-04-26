import React from 'react'
import Layout from '../../components/Layout/Layout'
import { mockDesigns } from '../../mocks/mockDesigns'
import { Card } from '../../components/Card/Card'
import { getDisplayDate } from '../../utils'
import './index.scss'
import { Stars } from '../../components/Stars/Stars'

const GalleryPage: React.FC = () => {
  return (
    <Layout>
      <div id="gallery-page" className="container">
        <h1 className="text-center">
          Gallery
        </h1>
        <div className="row">
          <div className="col-4">
            <h5>Filter</h5>
            <div id="filter-col" className="p-3 mt-4">
              <h6>Quality Level</h6>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="qualityFilter1"/>
                <label className="form-check-label" htmlFor="qualityFilter1">
                  CE certified
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="qualityFilter2"/>
                <label className="form-check-label" htmlFor="qualityFilter2">
                  Reviewed for clinical use
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="qualityFilter3"/>
                <label className="form-check-label" htmlFor="qualityFilter3">
                  Optimized for community use
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="qualityFilter4"/>
                <label className="form-check-label" htmlFor="qualityFilter4">
                  Not indicated
                </label>
              </div>
              <h6 className="mt-4">Review</h6>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="ratingFilter5"/>
                <label className="form-check-label" htmlFor="ratingFilter5">
                  <Stars selected={5}/>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="ratingFilter4"/>
                <label className="form-check-label" htmlFor="ratingFilter4">
                  <Stars selected={4}/>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="qualityFilter3"/>
                <label className="form-check-label" htmlFor="qualityFilter3">
                  <Stars selected={3}/>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="qualityFilter2"/>
                <label className="form-check-label" htmlFor="qualityFilter2">
                  <Stars selected={2}/>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="qualityFilter1"/>
                <label className="form-check-label" htmlFor="qualityFilter1">
                  <Stars selected={1}/>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="qualityFilter0"/>
                <label className="form-check-label" htmlFor="qualityFilter0">
                  <Stars selected={0}/>
                </label>
              </div>
            </div>
          </div>
          <div className="col-8">
            <h5>Designs</h5>
            {mockDesigns.map((design) => (
              <Card key={design.id}>
                <div className="row p-3">
                  <div className="col-5">
                    <img src={design.imageUrl} className="img-fluid"/>
                  </div>
                  <div className="col-7">
                    <h5 className="design-title">{design.title}</h5>
                    <p className="design-subtitle">by {design.createdBy}, {getDisplayDate(design.createdAt)}</p>
                    <p className="design-quality">{design.qualityLevel}</p>
                    <Stars selected={design.voting}/><span
                    style={{ color: '#616161', fontSize: 21, marginLeft: '1rem' }}>Review</span>
                    <p className="design-likes">{design.likes.toLocaleString()} Likes</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default GalleryPage
