import { Breadcrumb, Col, Row } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function BreadcrumbComponent() {
  const router = useRouter();

    // Get the current path segments
    const pathSegments = router.asPath.split('/').filter(segment => segment !== '');
    
    // Generate breadcrumb items
    let linkPath = '';
    const extraBreadcrumbItems = pathSegments.map((segment, index) => {
        const url = `${segment}`;
        linkPath += '/' + segment;

        return {
            key: url,
            title: <Link href={{pathname: linkPath}} shallow>{url}</Link>,
        };
    });

    const breadcrumbItems = extraBreadcrumbItems;

    return (
        <Row justify='start'>
            <Col style={{background : '#fff', borderRadius: '4px', padding: '2px 5px'}}>
                <Breadcrumb items={breadcrumbItems} />
            </Col>
        </Row>
    )
}
