import { Helmet } from "react-helmet-async";

function JobPage({ job }) {
    return (
        <>
        <Helmet>
            <title>{job.title} – Apply on YoJobs</title>
            <meta
            name="description"
            content={job.description.slice(0, 150)}
            />
            <meta property="og:title" content={job.title} />
            <meta
            property="og:description"
            content={job.description.slice(0, 150)}
            />
            <meta property="og:url" content={`https://yojobs.vercel.app/job/${job.id}`} />
            <meta property="og:type" content="job" />

            {/* Schema.org JobPosting */}
            <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "JobPosting",
            "title": job.title,
            "description": job.description,
            "datePosted": job.datePosted,
            "validThrough": job.validThrough,
            "employmentType": job.employmentType,
            "hiringOrganization": {
                "@type": "Organization",
                "name": "YoJobs",
                "sameAs": "https://yojobs.com"
            },
            "jobLocation": {
                "@type": "Place",
                "address": {
                "@type": "PostalAddress",
                "addressLocality": job.location,
                "addressCountry": "ZA"
                }
            }
            })}</script>
        </Helmet>

        <h1>{job.title}</h1>
        <p>{job.description}</p>
        </>
    );
}

export default JobPage;
