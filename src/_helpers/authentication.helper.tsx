import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Modal } from 'antd';
import { authenticationService } from '@/_services/authentication.service';

const AuthWrapper = ({ children }: { children: React.ReactNode; }) => {
    const router = useRouter()

    useEffect(() => {
        // If the user is not logged in and not in the loading state, redirect to the login page
        //Case already login condition
        const fullPath = router.pathname;
        const pathSegments = router.pathname.split('/');
        const firstPath = pathSegments[1];

        if (fullPath !== '/' && firstPath !== 'auth') {
            // Enable this to check authentication ***
            // const userData: any = authenticationService.currentUserValue;
            // let pathMatchWithType = false;

            // if (userData && typeof userData.role_name !== 'undefined') {
            //     pathMatchWithType =
            //         (userData.role_name === 'ผู้ดูแลระบบ') ||
            //         (userData.role_name === 'เจ้าหน้าที่ CPD' && firstPath === 'admin') ||
            //         (userData.role_name === 'แอดมินหน่วยงาน' && firstPath === 'institute') ||
            //         (userData.role_name === 'เจ้าหน้าที่หน่วยงาน' && firstPath === 'institute');
            // }

            // if (!pathMatchWithType) {
            //     if (userData)
            //         authenticationService.logout();

            //     Modal.error({
            //         icon: <ExclamationCircleOutlined />,
            //         title: 'เกิดข้อผิดพลาด',
            //         content: 'สิทธิ์การเข้าใช้งานระบบไม่ถูกต้อง',
            //         centered: true,
            //         onOk() {
            //             router.push("/auth/login");
            //             Modal.destroyAll();
            //         },
            //     });
            // }
        }

    }, [router])

    return <>{children}</>
}

export default AuthWrapper