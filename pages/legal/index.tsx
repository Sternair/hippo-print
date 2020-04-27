import React from 'react'
import Layout from '../../components/Layout/Layout'

const LegalPage: React.FC = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Legal</h1>
        <p>
          Data in hippomakes.com domain zones is hosted inside the European Union in Frankfurt, Germany with Amazon Web Services data centers, which are fully GDPR compliant <a href="https://aws.amazon.com/blogs/security/all-aws-services-gdpr-ready/">https://aws.amazon.com/blogs/security/all-aws-services-gdpr-ready/</a>
        </p>
      </div>
    </Layout>
  )
}

export default LegalPage
