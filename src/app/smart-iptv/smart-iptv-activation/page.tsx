import { redirect } from 'next/navigation';

// This page redirects to the canonical URL to avoid duplicate content
// Canonical: /blog/smart-iptv-activation/
export default function SmartIptvActivationRedirect() {
    redirect('/blog/smart-iptv-activation/');
}
