import React from 'react';
import { AlertTriangle, Globe2, ExternalLink } from 'lucide-react';
import { CRISIS_RESOURCES } from '../config/constants';

export function Disclaimer() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-yellow-50 p-4 text-sm">
        <div className="flex items-center gap-2">
          <AlertTriangle className="text-yellow-600" size={20} />
          <h2 className="font-semibold text-yellow-800">Important Notice</h2>
        </div>
        <p className="mt-2 text-yellow-700">
          This AI assistant provides general wellness guidance based on evidence-based practices. 
          It is not a substitute for professional medical or mental health care.
        </p>
      </div>

      <div className="rounded-lg bg-indigo-50 p-4 text-sm">
        <div className="flex items-center gap-2">
          <Globe2 className="text-indigo-600" size={20} />
          <h2 className="font-semibold text-indigo-800">Global Crisis Support</h2>
        </div>
        
        {/* Global Online Resources */}
        <div className="mt-4 border-b border-indigo-100 pb-4">
          <h3 className="font-semibold text-indigo-800">🌍 Worldwide Online Support</h3>
          <div className="mt-2 space-y-2">
            {CRISIS_RESOURCES.GLOBAL_RESOURCES[0].resources.map((resource, index) => (
              <div key={index} className="rounded-md bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <strong className="text-indigo-700">{resource.name}</strong>
                  <ExternalLink size={16} className="text-indigo-400" />
                </div>
                <p className="mt-1 text-indigo-600">{resource.details}</p>
                <p className="text-xs text-indigo-500">{resource.hours}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Country-Specific Resources*/}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {CRISIS_RESOURCES.GLOBAL_RESOURCES.slice(1).map((country, index) => (
            <div key={index} className="rounded-md bg-white p-3 shadow-sm">
              <h3 className="font-semibold text-indigo-800">{country.country}</h3>
              <div className="mt-2 space-y-2">
                {country.resources.map((resource, resourceIndex) => (
                  <div key={resourceIndex} className="border-l-2 border-indigo-200 pl-2">
                    <div className="font-medium text-indigo-700">{resource.name}</div>
                    <div className="text-sm text-indigo-600">{resource.contact}</div>
                    <div className="text-xs text-indigo-500">
                      {resource.hours} - {resource.details}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}