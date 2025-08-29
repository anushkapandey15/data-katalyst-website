import {
  Database,
  Cog,
  Shield,
  Users,
  BarChart3,
  GitBranch,
  Network,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

import { motion } from "framer-motion";
import CircleArrows from "./circle-arrows";

import ApacheAirflow from "../assets/images/Apache Airflow.png";
import ApacheKafka from "../assets/images/Apache Kafka.png";
import Salesforce from "../assets/images/Salesforce.png";
import D3js from "../assets/images/D3.js.png";
import RabbitMQ from "../assets/images/RabbitMQ.png";
import ApacheSpark from "../assets/images/Apache Spark.png";
import Azure from "../assets/images/azure.png";
import GoogleCloud from "../assets/images/Google Cloud.png";
import GraphQL from "../assets/images/GraphQL.png";
import MySQL from "../assets/images/MySQL.png";
import Python from "../assets/images/Python.png";
import React from "../assets/images/React.png";

const PlatformOverview = () => {
  return (
    <section className="py-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-2">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Data Katalyst Platform Overview
          </h2>
        </div>

        <div
          className="grid gap-12 mb-12"
          style={{ gridTemplateColumns: "1fr 1.2fr 1.8fr" }}
        >
          {/* Store Column */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-2">
                Store
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto"></div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-center items-center bg-gray-100 py-4 rounded-lg">
                <span className="text-gray-800 font-medium">Any storage</span>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                <p className="text-sm font-bold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent mb-2 text-center">
                  Open table formats
                </p>
                <p className="text-xs text-blue-600 font-bold text-center">
                  Iceberg, Delta, Hudi
                </p>
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
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 w-70">
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
              <div className="flex justify-center items-center bg-gray-100 py-4 rounded-lg">
                <span className="text-gray-800 font-medium">
                  Any engine, compute or tool
                </span>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                <p className="text-sm font-bold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent mb-2 text-center">
                  Technical data catalog
                </p>
                <p className="text-xs text-blue-600 font-bold text-center">
                  Physical metadata
                </p>
              </div>

              <div className="space-y-3">
                {/* Integration Partners (with images) */}
                <div className="grid grid-cols-4 gap-3">
                  <img
                    src={ApacheAirflow}
                    alt="Apache Airflow"
                    style={{ width: "1cm", height: "1cm", objectFit: "contain" }}
                    className="mx-auto"
                  />
                  <img
                    src={ApacheKafka}
                    alt="Apache Kafka"
                    style={{ width: "1cm", height: "1cm", objectFit: "contain" }}
                    className="mx-auto"
                  />
                  <img
                    src={Salesforce}
                    alt="Salesforce"
                    style={{ width: "1cm", height: "1cm", objectFit: "contain" }}
                    className="mx-auto"
                  />
                  <img
                    src={D3js}
                    alt="D3.js"
                    style={{ width: "1cm", height: "1cm", objectFit: "contain" }}
                    className="mx-auto"
                  />
                  <img
                    src={RabbitMQ}
                    alt="RabbitMQ"
                    style={{ width: "1cm", height: "1cm", objectFit: "contain" }}
                    className="mx-auto"
                  />
                  <img
                    src={ApacheSpark}
                    alt="Apache Spark"
                    style={{ width: "1cm", height: "1cm", objectFit: "contain" }}
                    className="mx-auto"
                  />
                  <img
                    src={Azure}
                    alt="Azure"
                    style={{ width: "1cm", height: "1cm", objectFit: "contain" }}
                    className="mx-auto"
                  />
                  <img
                    src={GoogleCloud}
                    alt="Google Cloud"
                    style={{ width: "1cm", height: "1cm", objectFit: "contain" }}
                    className="mx-auto"
                  />
                  <img
                    src={GraphQL}
                    alt="GraphQL"
                    style={{ width: "1cm", height: "1cm", objectFit: "contain" }}
                    className="mx-auto"
                  />
                  <img
                    src={MySQL}
                    alt="MySQL"
                    style={{ width: "1cm", height: "1cm", objectFit: "contain" }}
                    className="mx-auto"
                  />
                  <img
                    src={Python}
                    alt="Python"
                    style={{ width: "1cm", height: "1cm", objectFit: "contain" }}
                    className="mx-auto"
                  />
                  <img
                    src={React}
                    alt="React"
                    style={{ width: "1cm", height: "1cm", objectFit: "contain" }}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Trust/Comply/Consume Column */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 w-90 h-[67vh]">
            {/* Core Principles Header */}
            <div className="text-center mb-5">
              <div className="flex justify-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <div className="flex justify-center space-x-6 mb-4">
                <h3 className="text-xl font-bold text-blue-600">Trust</h3>
                <h3 className="text-xl font-bold text-blue-600">Comply</h3>
                <h3 className="text-xl font-bold text-blue-600">Consume</h3>
              </div>
              <div className="h-1 w-48 bg-blue-500 rounded-full mx-auto"></div>
            </div>

            {/* Unified Governance Section */}
            <div className="bg-gray-50 rounded-lg p-2 mb-6">
              <div className="text-center mb-4">
                <h4 className="text-sm font-bold text-blue-700 mb-3">
                  With unified governance for data and AI
                </h4>
              </div>

              <div className=" bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg p-1">
                <h5 className="text-base font-semibold text-blue-700 text-center mb-1">
                  Semantic Graph
                </h5>
                <p className="text-xs text-blue-600 text-center">
                  Physical, logical, conceptual, semantic, systems, policy, ...
                </p>
              </div>
            </div>

            {/* Central Governance Circle */}
            <div className="relative mb-8 h-[280px]">
              <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
                {/* CircleArrows replaces motion div */}
                <CircleArrows />

                {/* Center content */}
                <div className="absolute text-center px-4">
                  <p className="text-sm font-medium text-green-700">
                    AI-automated and collaborative stewardship
                  </p>
                </div>
              </div>

              {/* Top Arrow */}
              <motion.div
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute top-2 -left-1"
              >
                <div className="flex items-center w-60">
                  <div className="bg-gradient-to-l from-[#BEEAA0] 
via-[#e1f7d5] 
to-[rgba(161, 238, 222, 0.3)] px-8 py-3 text-sm text-green-700 font-semibold relative max-w-[200px] rounded-lg shadow-sm">
                    Policy setting
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 
        w-0 h-0 border-l-10 border-r-10 border-t-10 border-t-blue-200 border-l-transparent border-r-transparent"></div>
                  </div>
                </div>
              </motion.div>

              {/* Right Arrow */}
              <motion.div
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute top-2 right-0"
              >
                <div className="flex items-center ">
                  <div className="bg-gradient-to-r from-[#BEEAA0] 
via-[#e1f7d5] 
to-[rgba(161, 238, 222, 0.3)]
px-8 py-3 text-sm text-green-700 font-semibold relative max-w-[200px] rounded-lg shadow-sm">
                    Data quality
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 
        w-0 h-0 border-l-10 border-r-10 border-t-10 border-t-blue-200 border-l-transparent border-r-transparent"></div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Arrow */}
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute top-1/2 right-[-100px] transform -translate-y-1/2"
              >
                <div className="flex items-center w-60">
                  <div className="bg-gradient-to-r from-[#BAE1FF] via-[#BAE1FF] to-[#FFFFFF] px-6 py-3 text-xs font-medium text-blue-700  relative max-w-[160px] rounded-lg shadow-sm">
                    Policy enforcement
                    <div className=" 
        w-0 h-0 border-l-10 border-r-10 border-b-10 border-b-blue-200 border-l-transparent border-r-transparent"></div>
                  </div>
                </div>
              </motion.div>

              {/* Left Arrow */}
              <motion.div
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute top-1/2 -left-3 transform -translate-y-1/2 -translate-x-full"
              >
                <div className="flex items-center w-30">
                  <div className="bg-gradient-to-l from-[#BAE1FF] via-[#BAE1FF] to-[#FFFFFF] px-8 py-3 text-sm text-blue-700 font-semibold relative max-w-[200px] rounded-lg shadow-sm">
                    <div className="absolute top-2 
        w-0 h-0 border-t-10 border-b-10 border-l-10 border-l-blue-200 border-t-transparent border-b-transparent"></div>
                    Data products
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
