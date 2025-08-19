import {
  Database,
  Cog,
  Shield,
  Users,
  BarChart3,
  GitBranch,
} from "lucide-react";

const PlatformOverview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Data Katalyst Platform Overview
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive data management across storage, processing, and
            governance with unified control
          </p>
        </div>

        <div
          className="grid gap-6 mb-12"
          style={{ gridTemplateColumns: "1fr 2fr 4fr" }}
        >
          {/* Store Column */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-2">
                Store
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto"></div>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <h4 className="font-medium text-gray-900 mb-2">Any storage</h4>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                <p className="text-sm font-medium bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-2">
                  Open table formats
                </p>
                <p className="text-xs text-blue-600">Iceberg, Delta, Hudi</p>
              </div>

              <div className="space-y-3">
                {/* Cloud Providers */}
                <div className="grid grid-cols-1 gap-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg p-2 flex items-center justify-center">
                    <span className="text-sm font-medium">AWS</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg p-2 flex items-center justify-center">
                    <span className="text-sm font-medium">Azure</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg p-2 flex items-center justify-center">
                    <span className="text-sm font-medium">Google Cloud</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-2 text-center">
                  <span className="text-sm font-medium">ON-PREMISE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Build/Run/Operate Column */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-center space-x-6 mb-4">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                  Build
                </h3>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                  Run
                </h3>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                  Operate
                </h3>
              </div>
              <div className="h-1 w-40 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto"></div>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <h4 className="font-medium text-gray-700 mb-2">
                  Any engine, compute or tool
                </h4>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                <p className="text-sm font-medium bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-2">
                  Technical data catalog
                </p>
                <p className="text-xs text-blue-600">Physical metadata</p>
              </div>

              <div className="space-y-3">
                {/* Integration Partners */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-200 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-blue-700">
                      Spark
                    </span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-200 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-blue-700">
                      Databricks
                    </span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-200 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-blue-700">
                      Snowflake
                    </span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-200 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-blue-700">
                      Fivetran
                    </span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-200 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-blue-700">
                      BigQuery
                    </span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-200 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-blue-700">
                      Tableau
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust/Comply/Consume Column */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-center space-x-4 mb-4">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                  Trust
                </h3>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                  Comply
                </h3>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                  Consume
                </h3>
              </div>
              <div className="h-1 w-60 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <h4 className="font-medium text-gray-700 mb-2">Data Sources</h4>
                <div className="space-y-2">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 border border-blue-200">
                    <p className="text-sm font-medium bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                      Business catalog
                    </p>
                    <p className="text-xs text-blue-600">Business metadata</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h4 className="font-medium text-gray-700 mb-2">Data Products</h4>
                <div className="space-y-2">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 border border-blue-200">
                    <p className="text-sm font-medium bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                      AI agents
                    </p>
                    <p className="text-xs text-blue-600">Automated insights</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rotating Governance Circle */}
            <div className="relative mb-8">
              <div className="w-48 h-48 mx-auto relative">
                <div className="absolute inset-0 animate-spin-slow">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Rotating arrows */}
                    <defs>
                      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1d4ed8" />
                      </linearGradient>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="7"
                        refX="9"
                        refY="3.5"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3.5, 0 7" fill="url(#blueGradient)" />
                      </marker>
                    </defs>
                    
                    {/* Circle with arrows */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="url(#blueGradient)"
                      strokeWidth="3"
                      strokeDasharray="10 5"
                      markerEnd="url(#arrowhead)"
                    />
                    
                    {/* Multiple arrow segments for continuous flow */}
                    <path
                      d="M 100 20 A 80 80 0 0 1 180 100"
                      fill="none"
                      stroke="url(#blueGradient)"
                      strokeWidth="3"
                      markerEnd="url(#arrowhead)"
                    />
                    <path
                      d="M 180 100 A 80 80 0 0 1 100 180"
                      fill="none"
                      stroke="url(#blueGradient)"
                      strokeWidth="3"
                      markerEnd="url(#arrowhead)"
                    />
                    <path
                      d="M 100 180 A 80 80 0 0 1 20 100"
                      fill="none"
                      stroke="url(#blueGradient)"
                      strokeWidth="3"
                      markerEnd="url(#arrowhead)"
                    />
                    <path
                      d="M 20 100 A 80 80 0 0 1 100 20"
                      fill="none"
                      stroke="url(#blueGradient)"
                      strokeWidth="3"
                      markerEnd="url(#arrowhead)"
                    />
                  </svg>
                </div>

                {/* Center governance hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Labels positioned around the circle */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md hover:shadow-lg transition-shadow">
                    Data products and marketplace
                  </div>
                </div>
                
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-32 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md hover:shadow-lg transition-shadow">
                    Policy enforcement
                  </div>
                </div>
                
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md hover:shadow-lg transition-shadow">
                    Data quality and observability
                  </div>
                </div>
                
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-32 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md hover:shadow-lg transition-shadow">
                    Policy setting
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom integrations */}
            <div className="space-y-4">
              <div className="text-center">
                <h4 className="font-medium text-gray-700 mb-3">
                  Consumer integrations
                </h4>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-200 rounded-lg p-2 text-center">
                  <span className="text-xs font-medium text-blue-700">BI tools</span>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-200 rounded-lg p-2 text-center">
                  <span className="text-xs font-medium text-blue-700">Apps</span>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-200 rounded-lg p-2 text-center">
                  <span className="text-xs font-medium text-blue-700">ML/AI</span>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-200 rounded-lg p-2 text-center">
                  <span className="text-xs font-medium text-blue-700">APIs</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg p-3 text-center">
                <p className="text-sm font-medium">Data as a Service</p>
                <p className="text-xs opacity-90">Self-service data access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;