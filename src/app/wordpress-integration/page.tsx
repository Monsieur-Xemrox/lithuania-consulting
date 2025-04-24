"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import { WordPressExportHelper, generateExportConfig, getWordPressIntegrationSteps } from '@/utils/wordpress-exporter';
import { Copy, CheckCircle, HelpCircle, AlertCircle, FileCode, Upload, PenTool } from 'lucide-react';
export default function WordPressIntegrationPage() {
  const {
    t
  } = useLanguage();
  const [activeTab, setActiveTab] = useState("static-export");
  const [copied, setCopied] = useState<Record<string, boolean>>({});
  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied({
        ...copied,
        [id]: true
      });
      setTimeout(() => setCopied({
        ...copied,
        [id]: false
      }), 2000);
    });
  };
  const configCode = generateExportConfig();
  const integrationSteps = getWordPressIntegrationSteps();
  const templates = {
    phpTemplate: `<?php
/**
 * Template Name: Next.js App Template
 * Description: A template to integrate your Next.js application
 */

get_header();
?>

<div id="nextjs-root">
    <!-- Your Next.js app will be loaded here -->
    <div class="loading-indicator">Loading...</div>
</div>

<script>
    // Load Next.js app scripts
    document.addEventListener('DOMContentLoaded', function() {
        function loadScript(url, callback) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            script.onload = callback;
            document.body.appendChild(script);
        }
        
        // Load your app's main JS file
        loadScript('<?php echo get_template_directory_uri(); ?>/nextjs-app/_next/static/chunks/main.js', function() {
            // After main script is loaded, the app should initialize
            document.querySelector('.loading-indicator').style.display = 'none';
        });
    });
</script>

<?php get_footer(); ?>`,
    shortcodeTemplate: `<?php
// Add this to your theme's functions.php

function nextjs_app_shortcode($atts) {
    $attributes = shortcode_atts(array(
        'id' => 'nextjs-root',
        'height' => '600px',
    ), $atts);
    
    $app_url = get_template_directory_uri() . '/nextjs-app';
    
    $output = '<div id="' . esc_attr($attributes['id']) . '" style="min-height: ' . esc_attr($attributes['height']) . ';">';
    $output .= '<div class="loading">Loading application...</div>';
    $output .= '</div>';
    
    $output .= '<script>';
    $output .= 'document.addEventListener("DOMContentLoaded", function() {';
    $output .= '    var appRoot = document.getElementById("' . esc_attr($attributes['id']) . '");';
    $output .= '    var script = document.createElement("script");';
    $output .= '    script.src = "' . esc_url($app_url) . '/_next/static/chunks/main.js";';
    $output .= '    script.onload = function() {';
    $output .= '        appRoot.querySelector(".loading").style.display = "none";';
    $output .= '    };';
    $output .= '    document.body.appendChild(script);';
    $output .= '});';
    $output .= '</script>';
    
    return $output;
}
add_shortcode('nextjs_app', 'nextjs_app_shortcode');`
  };
  return <main className="min-h-screen py-24 bg-gradient-to-br from-white to-[#f0f9ff]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          WordPress Integration Guide
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Learn how to integrate your Next.js application with WordPress using different strategies
        </p>

        {/* Integration Tool */}
        <WordPressExportHelper />

        {/* Tabs for different integration methods */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <Tabs defaultValue="static-export" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full flex mb-8 border-b">
              <TabsTrigger value="static-export" className={`flex-1 py-3 ${activeTab === "static-export" ? 'border-b-2 border-[#0056b3] text-[#0056b3]' : 'text-gray-500'}`}>
                Static Export Method
              </TabsTrigger>
              <TabsTrigger value="iframe" className={`flex-1 py-3 ${activeTab === "iframe" ? 'border-b-2 border-[#0056b3] text-[#0056b3]' : 'text-gray-500'}`}>
                iFrame Integration
              </TabsTrigger>
              <TabsTrigger value="headless" className={`flex-1 py-3 ${activeTab === "headless" ? 'border-b-2 border-[#0056b3] text-[#0056b3]' : 'text-gray-500'}`}>
                Headless WordPress
              </TabsTrigger>
            </TabsList>

            {/* Static Export Method Content */}
            <TabsContent value="static-export" className="space-y-8">
              <div className="flex items-start">
                <div className="bg-[#ebf5ff] p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                  <FileCode size={24} className="text-[#0056b3]" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Static Export Method</h2>
                  <p className="text-gray-600">
                    This approach involves exporting your Next.js app as static HTML/CSS/JS files and embedding them directly in your WordPress site.
                    It's ideal for simpler applications that don't require server-side features.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-[#0056b3] pl-4 py-2 bg-blue-50">
                <h3 className="font-medium text-lg flex items-center">
                  <AlertCircle size={18} className="text-[#0056b3] mr-2" />
                  Prerequisites
                </h3>
                <ul className="list-disc pl-8 mt-2 space-y-1 text-gray-700">
                  <li>Access to your WordPress theme files</li>
                  <li>FTP or file manager access to upload files</li>
                  <li>Basic knowledge of WordPress theme structure</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Step 1: Configure Next.js for static export</h3>
                <div className="relative">
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>{configCode}</code>
                  </pre>
                  <button onClick={() => handleCopy('config', configCode)} className="absolute top-2 right-2 p-2 bg-white/10 rounded-md hover:bg-white/20 transition-colors">
                    {copied['config'] ? <CheckCircle size={18} /> : <Copy size={18} />}
                  </button>
                </div>

                <h3 className="text-xl font-semibold">Step 2: Build and export your application</h3>
                <div className="relative">
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>{`# In your Next.js project directory
bun run build
# Your static files will be in the 'out' directory`}</code>
                  </pre>
                  <button onClick={() => handleCopy('build', 'bun run build')} className="absolute top-2 right-2 p-2 bg-white/10 rounded-md hover:bg-white/20 transition-colors">
                    {copied['build'] ? <CheckCircle size={18} /> : <Copy size={18} />}
                  </button>
                </div>

                <h3 className="text-xl font-semibold">Step 3: Create a custom WordPress template</h3>
                <div className="relative">
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>{templates.phpTemplate}</code>
                  </pre>
                  <button onClick={() => handleCopy('template', templates.phpTemplate)} className="absolute top-2 right-2 p-2 bg-white/10 rounded-md hover:bg-white/20 transition-colors">
                    {copied['template'] ? <CheckCircle size={18} /> : <Copy size={18} />}
                  </button>
                </div>

                <h3 className="text-xl font-semibold">Step 4: Create a WordPress shortcode (alternative)</h3>
                <div className="relative">
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>{templates.shortcodeTemplate}</code>
                  </pre>
                  <button onClick={() => handleCopy('shortcode', templates.shortcodeTemplate)} className="absolute top-2 right-2 p-2 bg-white/10 rounded-md hover:bg-white/20 transition-colors">
                    {copied['shortcode'] ? <CheckCircle size={18} /> : <Copy size={18} />}
                  </button>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                  <h4 className="font-medium flex items-center">
                    <CheckCircle size={18} className="text-green-500 mr-2" />
                    Usage with shortcode
                  </h4>
                  <p className="mt-1 text-gray-700">
                    After setting up the shortcode, you can use it in any WordPress post or page:
                  </p>
                  <pre className="bg-white text-gray-800 p-3 rounded mt-2 overflow-x-auto">
                    <code>[nextjs_app id="my-app" height="800px"]</code>
                  </pre>
                </div>
              </div>
            </TabsContent>

            {/* iFrame Integration Content */}
            <TabsContent value="iframe" className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#ebf5ff] p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                  <Upload size={24} className="text-[#0056b3]" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2">iFrame Integration</h2>
                  <p className="text-gray-600">
                    Deploy your Next.js app separately and embed it using an iframe in your WordPress pages.
                    This method allows your Next.js app to operate independently with all its features.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Step 1: Deploy your Next.js application</h3>
                <p className="text-gray-700">
                  Deploy your Next.js application to a hosting service like Vercel, Netlify, or any other platform that supports Next.js.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Vercel */}
                  <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                    <Image src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png" alt="Vercel Logo" width={80} height={80} className="mb-4" />
                    <h4 className="text-lg font-medium mb-2">Vercel (Recommended)</h4>
                    <p className="text-gray-600 text-sm mb-4">Native integration with Next.js, zero configuration needed</p>
                    <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer" className="text-[#0056b3] hover:underline text-sm flex items-center">
                      Deploy on Vercel
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>

                  {/* Netlify */}
                  <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                    <Image src="https://picsum.photos/200" alt="Netlify Logo" width={80} height={80} className="mb-4" />
                    <h4 className="text-lg font-medium mb-2">Netlify</h4>
                    <p className="text-gray-600 text-sm mb-4">Easy deployment with GitHub integration and build commands</p>
                    <a href="https://app.netlify.com/start" target="_blank" rel="noopener noreferrer" className="text-[#0056b3] hover:underline text-sm flex items-center">
                      Deploy on Netlify
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>

                  {/* DigitalOcean */}
                  <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg" alt="DigitalOcean Logo" width={80} height={80} className="mb-4" />
                    <h4 className="text-lg font-medium mb-2">DigitalOcean App Platform</h4>
                    <p className="text-gray-600 text-sm mb-4">Managed platform with auto-deployments from GitHub</p>
                    <a href="https://cloud.digitalocean.com/apps" target="_blank" rel="noopener noreferrer" className="text-[#0056b3] hover:underline text-sm flex items-center">
                      Deploy on DigitalOcean
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-semibold">Step 2: Create a WordPress shortcode for the iframe</h3>
                <div className="relative">
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>{`<?php
// Add this to your theme's functions.php

function nextjs_iframe_shortcode($atts) {
    $attributes = shortcode_atts(array(
        'src' => 'https://your-nextjs-app-url.com',
        'height' => '600px',
        'scrolling' => 'no',
        'title' => 'Next.js Application',
    ), $atts);
    
    return '<div class="nextjs-iframe-container" style="position: relative; width: 100%; height: ' . esc_attr($attributes['height']) . ';">
        <iframe 
            src="' . esc_url($attributes['src']) . '" 
            title="' . esc_attr($attributes['title']) . '"
            scrolling="' . esc_attr($attributes['scrolling']) . '"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>';
}
add_shortcode('nextjs_iframe', 'nextjs_iframe_shortcode');`}</code>
                  </pre>
                  <button onClick={() => handleCopy('iframe-shortcode', `<?php
// Add this to your theme's functions.php

function nextjs_iframe_shortcode($atts) {
    $attributes = shortcode_atts(array(
        'src' => 'https://your-nextjs-app-url.com',
        'height' => '600px',
        'scrolling' => 'no',
        'title' => 'Next.js Application',
    ), $atts);
    
    return '<div class="nextjs-iframe-container" style="position: relative; width: 100%; height: ' . esc_attr($attributes['height']) . ';">
        <iframe 
            src="' . esc_url($attributes['src']) . '" 
            title="' . esc_attr($attributes['title']) . '"
            scrolling="' . esc_attr($attributes['scrolling']) . '"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>';
}
add_shortcode('nextjs_iframe', 'nextjs_iframe_shortcode');`)} className="absolute top-2 right-2 p-2 bg-white/10 rounded-md hover:bg-white/20 transition-colors">
                    {copied['iframe-shortcode'] ? <CheckCircle size={18} /> : <Copy size={18} />}
                  </button>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                  <h4 className="font-medium flex items-center">
                    <CheckCircle size={18} className="text-green-500 mr-2" />
                    Usage with shortcode
                  </h4>
                  <p className="mt-1 text-gray-700">
                    After setting up the shortcode, you can use it in any WordPress post or page:
                  </p>
                  <pre className="bg-white text-gray-800 p-3 rounded mt-2 overflow-x-auto">
                    <code>[nextjs_iframe src="https://your-nextjs-app-url.com" height="800px" scrolling="yes" title="Litu Consulting Application"]</code>
                  </pre>
                </div>

                <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50">
                  <h4 className="font-medium text-lg flex items-center">
                    <AlertCircle size={18} className="text-amber-500 mr-2" />
                    Important considerations for iFrame integration
                  </h4>
                  <ul className="list-disc pl-8 mt-2 space-y-1 text-gray-700">
                    <li>Cross-domain issues may arise if your WordPress site and Next.js app are on different domains</li>
                    <li>You'll need to handle communication between iframe and parent window if needed</li>
                    <li>SEO may be affected as search engines don't always index content within iframes</li>
                    <li>Ensure your Next.js app is responsive to adapt to the iframe container</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* Headless WordPress Content */}
            <TabsContent value="headless" className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#ebf5ff] p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                  <PenTool size={24} className="text-[#0056b3]" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Headless WordPress</h2>
                  <p className="text-gray-600">
                    Use WordPress as a headless CMS that provides content via its REST API, while your Next.js app serves as the frontend.
                    This is the most powerful and modern approach for large-scale applications.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Step 1: Configure your WordPress site as a headless CMS</h3>
                <ol className="list-decimal pl-8 space-y-4 text-gray-700">
                  <li>
                    <p className="font-medium">Install required WordPress plugins</p>
                    <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-md border border-gray-200">
                        <h5 className="font-medium text-[#0056b3] mb-2">WP REST API</h5>
                        <p className="text-sm">Core WordPress feature that exposes your content via REST API endpoints.</p>
                      </div>
                      <div className="bg-white p-4 rounded-md border border-gray-200">
                        <h5 className="font-medium text-[#0056b3] mb-2">JWT Authentication</h5>
                        <p className="text-sm">Add JWT authentication to the WordPress REST API.</p>
                      </div>
                      <div className="bg-white p-4 rounded-md border border-gray-200">
                        <h5 className="font-medium text-[#0056b3] mb-2">Advanced Custom Fields</h5>
                        <p className="text-sm">Add custom fields to your WordPress content.</p>
                      </div>
                      <div className="bg-white p-4 rounded-md border border-gray-200">
                        <h5 className="font-medium text-[#0056b3] mb-2">WP GraphQL</h5>
                        <p className="text-sm">Provides a GraphQL API for WordPress (alternative to REST API).</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <p className="font-medium">Enable CORS support in WordPress</p>
                    <div className="relative mt-2">
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <code>{`<?php
// Add this to your WordPress theme's functions.php file
add_action('init', 'add_cors_http_header');
function add_cors_http_header(){
    header('Access-Control-Allow-Origin: https://your-nextjs-app-domain.com');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
}`}</code>
                      </pre>
                      <button onClick={() => handleCopy('cors', `<?php
// Add this to your WordPress theme's functions.php file
add_action('init', 'add_cors_http_header');
function add_cors_http_header(){
    header('Access-Control-Allow-Origin: https://your-nextjs-app-domain.com');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
}`)} className="absolute top-2 right-2 p-2 bg-white/10 rounded-md hover:bg-white/20 transition-colors">
                        {copied['cors'] ? <CheckCircle size={18} /> : <Copy size={18} />}
                      </button>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold">Step 2: Configure your Next.js app to consume WordPress content</h3>
                <div className="relative">
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>{`// First, install the required package
// bun add @wordpress/api-fetch

// src/lib/api.ts
import apiFetch from '@wordpress/api-fetch';

// Set up the API root URL
apiFetch.use(apiFetch.createRootURLMiddleware('https://your-wordpress-site.com/wp-json'));

export async function getPages() {
  return apiFetch({ path: '/wp/v2/pages' });
}

export async function getPage(slug: string) {
  const pages = await apiFetch({
    path: \`/wp/v2/pages?slug=\${slug}\`,
  });
  return pages[0];
}

export async function getPosts(page = 1) {
  return apiFetch({
    path: \`/wp/v2/posts?page=\${page}&_embed=true\`,
  });
}

export async function getPost(slug: string) {
  const posts = await apiFetch({
    path: \`/wp/v2/posts?slug=\${slug}&_embed=true\`,
  });
  return posts[0];
}`}</code>
                  </pre>
                  <button onClick={() => handleCopy('api-fetch', `// First, install the required package
// bun add @wordpress/api-fetch

// src/lib/api.ts
import apiFetch from '@wordpress/api-fetch';

// Set up the API root URL
apiFetch.use(apiFetch.createRootURLMiddleware('https://your-wordpress-site.com/wp-json'));

export async function getPages() {
  return apiFetch({ path: '/wp/v2/pages' });
}

export async function getPage(slug: string) {
  const pages = await apiFetch({
    path: \`/wp/v2/pages?slug=\${slug}\`,
  });
  return pages[0];
}

export async function getPosts(page = 1) {
  return apiFetch({
    path: \`/wp/v2/posts?page=\${page}&_embed=true\`,
  });
}

export async function getPost(slug: string) {
  const posts = await apiFetch({
    path: \`/wp/v2/posts?slug=\${slug}&_embed=true\`,
  });
  return posts[0];
}`)} className="absolute top-2 right-2 p-2 bg-white/10 rounded-md hover:bg-white/20 transition-colors">
                    {copied['api-fetch'] ? <CheckCircle size={18} /> : <Copy size={18} />}
                  </button>
                </div>

                <h3 className="text-xl font-semibold">Step 3: Example of consuming WordPress content in a Next.js page</h3>
                <div className="relative">
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>{`// src/app/blog/[slug]/page.tsx
import { getPost } from '@/lib/api';
import { notFound } from 'next/navigation';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">{post.title.rendered}</h1>
      <div 
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
      />
    </article>
  );
}

// Generate static paths for all posts at build time
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}`}</code>
                  </pre>
                  <button onClick={() => handleCopy('blog-post', `// src/app/blog/[slug]/page.tsx
import { getPost } from '@/lib/api';
import { notFound } from 'next/navigation';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">{post.title.rendered}</h1>
      <div 
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
      />
    </article>
  );
}

// Generate static paths for all posts at build time
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}`)} className="absolute top-2 right-2 p-2 bg-white/10 rounded-md hover:bg-white/20 transition-colors">
                    {copied['blog-post'] ? <CheckCircle size={18} /> : <Copy size={18} />}
                  </button>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                  <h4 className="font-medium flex items-center">
                    <HelpCircle size={18} className="text-blue-500 mr-2" />
                    Benefits of Headless Approach
                  </h4>
                  <ul className="list-disc pl-8 mt-2 space-y-1 text-gray-700">
                    <li>Separation of concerns: content management vs. frontend presentation</li>
                    <li>Better performance with server-side rendering and static generation</li>
                    <li>Superior developer experience with modern JavaScript frameworks</li>
                    <li>Flexibility to build multiple frontends (web, mobile, etc.) using the same content API</li>
                    <li>Easier to scale and maintain as your application grows</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* FAQ Section */}
        <div className="mt-12" id="wordpress-guide">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Can I use WordPress plugins with my Next.js app?</h3>
              <p className="text-gray-700">
                When using the headless approach, you can still use WordPress plugins on the backend. However, 
                frontend WordPress plugins that modify the website's appearance or add JavaScript functionality
                won't work directly with your Next.js frontend. You'll need to implement that functionality in React.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Will my Next.js app maintain SEO benefits?</h3>
              <p className="text-gray-700">
                Yes, especially with the headless approach or static integration. Next.js has excellent SEO capabilities 
                with server-side rendering and static generation. With the iframe approach, SEO might be limited as 
                search engines don't always fully index iframe content.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Can I use WordPress forms with my Next.js app?</h3>
              <p className="text-gray-700">
                For the headless approach, you can use the WordPress REST API to handle form submissions. For static export 
                or iframe integration, you might need to create separate endpoints or use WordPress plugins that provide API access.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Do I need a special WordPress hosting plan?</h3>
              <p className="text-gray-700">
                No special hosting is required, but for the headless approach, you'll need a WordPress hosting plan that provides 
                reliable API access. Your Next.js app can be hosted separately on platforms like Vercel or Netlify.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>;
}
