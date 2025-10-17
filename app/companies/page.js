import Layout from "@/components/layout/Layout"
import CompanyListing from "@/components/sections/companies/CompanyListing"

export default function Companies() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Companies">
                <CompanyListing />
            </Layout>
        </div>
    )
}
